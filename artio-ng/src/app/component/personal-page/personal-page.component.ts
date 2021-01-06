import { OnInit, Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Post } from "src/app/model/post";
import { User } from "src/app/model/user";
import { UtilsService } from "src/app/service/utils.service";


@Component({
    selector: 'personal-page',
    templateUrl: './personal-page.component.html',
    styleUrls: ['./personal-page.component.scss']
})

export class PersonalPage implements OnInit {

    public user: User = {
        username: "milbay",
        firstname: "Mill",
        lastname: "Bay",

        profilePhoto: "caca",
        description: "Imi place sa mananc aicea vreau sa imi iau un caine si sa cunosc alti pasionati de shaorma. \n Peste medie. Imi place sa mananc aicea vreau sa imi iau un caine si sa cunosc alti pasionati de shaorma. \n Peste medie. Imi place sa mananc aicea vreau sa imi iau un caine si sa cunosc alti pasionati de shaorma. \n Peste medie."
    };

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

    getImage(encodedImage: string) {
        return this.utilsService.getImage(encodedImage);
    }
    
    ngOnInit() {
    }
}