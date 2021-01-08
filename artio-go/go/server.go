package swagger

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/go-redis/redis/v8"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"sort"
)
var ApiServer *Server
//Server is a struct that keeps track of the routes in backend and redis client connection
type Server struct {
	router *mux.Router
	redis  *redis.Client
}

func InitServer() error {
	//redisPassword := os.Getenv("REDIS_PASSWORD")
	rdb := redis.NewClient(&redis.Options{
		Addr: "localhost:6380",
		Password: "",
		DB: 0,
	})
	pong, err := rdb.Ping(context.Background()).Result()
	fmt.Println(pong)

	if err != nil {
		return err
	}

	ApiServer = &Server{
		router: NewRouter(),
		redis: rdb,
	}
	return nil
}

//Serve is a method for actually putting the routes up
func Serve() {
	log.Println("Starting server")
	log.Fatal(http.ListenAndServe(":42069", ApiServer.router))
}


func (s *Server) StoreUser(u User) error {
	byteUser, err := json.Marshal(u)
	if err != nil {
		return err
	}
	ctx := context.Background()

	return s.redis.Set(ctx, u.Username, byteUser, 0).Err()
}

func (s *Server) StoreBusiness(b Business) error {
	byteBusiness, err := json.Marshal(b)
	if err != nil {
		return err
	}
	ctx := context.Background()

	return s.redis.Set(ctx, b.Username, byteBusiness, 0).Err()
}

func (s *Server) StoreReview(r Reviews) error {
	byteReview, err := json.Marshal(r)
	if err != nil {
		return err
	}
	ctx := context.Background()
	key := r.Business + "_reviews"

	return s.redis.LPush(ctx, key, byteReview).Err()
}

func (s *Server) StorePost(p Posts) error {
	bytePost, err := json.Marshal(p)
	if err != nil {
		return err
	}
	ctx := context.Background()
	key := p.User + "_posts"

	return s.redis.LPush(ctx, key, bytePost).Err()
}

func (s *Server) GetPosts(username string) ([]Posts, error) {
	var posts []Posts
	ctx := context.Background()
	key := username + "_posts"
	strPosts, err := s.redis.LRange(ctx, key, 0, 100).Result()
	if err != nil {
		return nil, err
	}
	for _, strPost := range strPosts {
		bytePost := []byte(strPost)
		var post Posts
		err = json.Unmarshal(bytePost, &post)
		if err != nil {
			return nil, err
		}
		posts = append(posts, post)
	}

	return posts, nil
}
func (s *Server) GetReviews(businessName string) ([]Reviews, error) {
	var reviews []Reviews
	ctx := context.Background()
	key := businessName + "_reviews"
	strReviews, err := s.redis.LRange(ctx, key, 0, 100).Result()
	if err != nil {
		return nil, err
	}
	for _, strReview := range strReviews {
		byteReview := []byte(strReview)
		var review Reviews
		err = json.Unmarshal(byteReview, &review)
		if err != nil {
			return nil, err
		}
		reviews = append(reviews, review)
	}
	return reviews, nil
}
func (s *Server) GetUser(username string) (User, error) {
	var u User
	ctx := context.Background()
	byteUser, err := s.redis.Get(ctx, username).Bytes()
	if err != nil {
		return u, err
	}
	err = json.Unmarshal(byteUser, &u)
	if err != nil {
		return u, err
	}
	return u, nil
}

func (s *Server) GetBusiness(businessName string) (Business, error) {
	var b Business
	ctx := context.Background()
	byteBusiness, err := s.redis.Get(ctx, businessName).Bytes()
	if err != nil {
		return b, err
	}
	err = json.Unmarshal(byteBusiness, &b)
	if err != nil {
		return b, err
	}
	return b, nil
}

func (s *Server) GetExploreFeed() ([]Explorable, error) {
	var explorable []Explorable
	ctx := context.Background()
	keysPosts, err := s.redis.Keys(ctx, "*_posts").Result()
	if err != nil {
		return nil, err
	}

	for _, key := range keysPosts {
		strPosts, err := s.redis.LRange(ctx, key, 0, 100).Result()
		for _, strPost := range strPosts {
			bytePost := []byte(strPost)
			var p Posts
			err = json.Unmarshal(bytePost, &p)
			if err != nil {
				return nil, err
			}
			explorable = append(explorable, p)
		}
	}

	keyReviews, err := s.redis.Keys(ctx, "*_reviews").Result()
	if err != nil {
		return nil, err
	}

	for _, key := range keyReviews {
		strReviews, err := s.redis.LRange(ctx, key, 0, 100).Result()
		for _, strReview := range strReviews {
			byteReview := []byte(strReview)
			var r Reviews
			err = json.Unmarshal(byteReview, &r)
			if err != nil {
				return nil, err
			}
			explorable = append(explorable, r)
		}
	}

	//sort the explorable by timestamp
	sort.SliceStable(explorable, func(i, j int) bool {
		return explorable[i].GetTimestamp() > explorable[i].GetTimestamp()
	})

	return explorable, nil
}

