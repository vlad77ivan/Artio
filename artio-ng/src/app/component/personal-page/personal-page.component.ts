import { OnInit, Component } from "@angular/core";
import { Post } from "src/app/model/post";
import { User } from "src/app/model/user";

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
            photo: "",
            text: "doamne fereste ce am putut vedea aici",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici",
            username: "carnat",
            timestamp: new Date()
        },
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici",
            username: "carnat",
            timestamp: new Date()
        },
    ]

    constructor() {
    }

    ngOnInit() {
    }
}