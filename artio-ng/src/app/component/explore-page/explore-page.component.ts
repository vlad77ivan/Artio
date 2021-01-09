import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { BusinessService } from 'src/app/service/business.service';
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

    @Input() user: User = {} as User;
    
    public latestItems: Array<any> = []

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

    constructor(private utilsService: UtilsService,
        private businessService: BusinessService) {
    }   

    ngOnInit() {
        this.getBusinesses();
        this.businessService.getExplore().subscribe((items) => {
            this.latestItems = items as Array<any>;
        })
    }

    getBusinesses() {
        // x 3
        this.businessService.getBusiness('').subscribe((business) => {
            this.businesses.push(business as Business);
        })
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
