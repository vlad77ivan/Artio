package main

import (
	sw "artio-go/go"
	"log"
	"net/http"

	"github.com/go-redis/redis/v8"
	"github.com/gorilla/mux"
)

//Server is a struct that keeps track of the routes in backend and redis client connection
type Server struct {
	router *mux.Router
	redis  *redis.Client
}

//NewServer is constructor for the server type
func NewServer() *Server {
	var server Server
	server.router = sw.NewRouter()

	return &server
}

//Serve is a method for actually putting the routes up
func (s *Server) Serve() {
	log.Println("Starting server")
	log.Fatal(http.ListenAndServe(":8080", s.router))
}
