import { OnInit, Component, Input } from "@angular/core";
import { Post } from "src/app/model/post";
import { User } from "src/app/model/user";
import { UsersService } from "src/app/service/user.service";
import { UtilsService } from "src/app/service/utils.service";


@Component({
    selector: 'personal-page',
    templateUrl: './personal-page.component.html',
    styleUrls: ['./personal-page.component.scss']
})

export class PersonalPage implements OnInit {
    public newPostText: string = '';
    public imageSrc: string = '';

    @Input()
    user!: User;

    public posts: Array<Post> = []

    constructor(private utilsService: UtilsService,
        private usersService: UsersService) {
    }

    ngOnInit() {
        console.log(this.user);
        this.usersService.getPosts(this.user.username).subscribe((posts) => {
            if (posts) {
                this.posts = posts as Array<Post>;
            } else {
                this.posts = [];
            }
        });
    }


    getImage(encodedImage: string) {
        return this.utilsService.getImage(encodedImage);
    }

    handleInputChange(e: any) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
      }

    _handleReaderLoaded(e: any) {
        let reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc)
    }

    makePost() {
        const newPost = {
            username: this.user.username,
            text: this.newPostText,
            photo: this.imageSrc,
            timestamp: new Date(),
        } as Post;

        this.usersService.makePost(newPost).subscribe(() => {
            this.posts.push(newPost);
        });
    }

   
}