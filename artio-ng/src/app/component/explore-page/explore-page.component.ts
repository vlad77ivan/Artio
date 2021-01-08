import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UtilsService } from 'src/app/service/utils.service';
import { Business } from '../../model/business'
@Component({
    selector: 'explore-page-component',
    templateUrl: './explore-page.component.html',
    styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit {
    public showBusiness = false;
    public businessToShow = {
        username: "socului_rulz",
        companyName: "Shaormeria Socului",
        profilePhoto: "a",
        description: "Buna ziua avem shaorma fffffff mare si ffff buna si fffffff mare si ffff buna si fffffff mare si ffff buna si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si tot ce vrea plt hai barosane sau comanda la numarul 0792 constipatie amandoi"
    } as Business;
    public user: User = {
        username: "milbay",
        firstname: "Mill",
        lastname: "Bay",

        profilePhoto: "caca",
        description: "."
    };
    
    public latestItems: Array<any> = [
        {
            photo: "",
            text: "doamne fereste ce am putut vedea aici terifiant super cool amaizng wow guys like gen ce tare",
            username: "carnat",
            timestamp: new Date()
        },
        {
            text: "peste medie o fost super tare",
            timestamp: new Date(),
            rating: 3,
            user: this.user,
            business: this.businessToShow
        },
    ]
    businesses = [
        {
            username: "socului_rulz",
            companyName: "Shaormeria Snecherie",
            profilePhoto: "a",
            description: "Buna ziua avem shaorma fffffff mare si ffff buna si fffffff mare si ffff buna si fffffff mare si ffff buna si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si tot ce vrea plt hai barosane sau comanda la numarul 0792 constipatie amandoi"
        } as Business,
        {
            username: "socului_rulz",
            companyName: "Shaormeria Golanie",
            profilePhoto: "a",
            description: "Buna ziua avem shaorma fffffff mare si ffff buna si fffffff mare si ffff buna si fffffff mare si ffff buna si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si tot ce vrea plt hai barosane sau comanda la numarul 0792 constipatie amandoi"
        } as Business,
        {
            username: "socului_rulz",
            companyName: "Shaormeria Socului",
            profilePhoto: "a",
            description: "Buna ziua avem shaorma fffffff mare si ffff buna si fffffff mare si ffff buna si fffffff mare si ffff buna si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si tot ce vrea plt hai barosane sau comanda la numarul 0792 constipatie amandoi"
        } as Business
    ]

    constructor(private utilsService: UtilsService) {
    }   

    ngOnInit() {
    }


    getImage(encodedImage: string) {
        return this.utilsService.getImage(encodedImage);
    }

    openBusiness(business: Business) {
        this.businessToShow = business;
        this.showBusiness = true;
    }

    isPost(item: any): boolean {
        return item.hasOwnProperty('photo');
    }

    back() {
        this.showBusiness = false;
    }
}
