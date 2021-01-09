import { OnInit, Component, Input } from "@angular/core";
import { Post } from "src/app/model/post";
import { User } from "src/app/model/user";
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

    public posts: Array<Post> = [ 
        {
            photo: "2",
            text: "doamne fereste ce am putut vedea aici terifiant super cool amaizng wow guys like gen ce tare",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici terifiant super cool amaizng wow guys like gen ce tare",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "3",
            text: "doamne fereste ce am putut vedea aici terifiant super cool amaizng wow guys like gen ce tare",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "3",
            text: "doamne fereste ce am putut vedea aici terifiant super cool amaizng wow guys like gen ce tare",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici terifiant super cool amaizng wow guys like gen ce tare",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "3",
            text: "doamne fereste ce am putut vedea aici terifiant super cool amaizng wow guys like gen ce tare",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici terifiant super cool amaizng wow guys like gen ce tare",
            username: "carnat",
            timestamp: new Date()
        },
    ]

    constructor(private utilsService: UtilsService) {
    }

    ngOnInit() {
        console.log(this.user);
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
        console.log(this.imageSrc);
        console.log(this.newPostText);
    }

   
}