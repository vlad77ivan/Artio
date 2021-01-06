import { OnInit, Component, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Post } from "src/app/model/post";
import { UtilsService } from "src/app/service/utils.service";
import { image } from "../../model/image.const"

@Component({
    selector: 'post-component',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
    @Input() inputPost = {} as Post;

    constructor(private utilsService: UtilsService) {
    }

    ngOnInit() {
    }

    getImage(encodedImage: string) {
        return this.utilsService.getImage(encodedImage);
    }

}