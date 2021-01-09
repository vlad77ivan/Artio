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
    public businessToShow = {} as Business;

    @Input() user: User = {} as User;
    
    public latestItems: Array<any> = []

    businesses = [
        {
            username: "petshop",
            company_name: "PetShop",
            profile_picture: "",
            description: "Puteti gasi o gama larga de mancare, jucarii si accesorii pentru cele mai intalnite animale de companie. Ne gasiti pe Strada Locuirii Nr. 420 sau la 0797420420."
        } as Business,
        {
            username: "vet",
            company_name: "Cabinet Veterinar",
            profile_picture: "",
            description: "Va stam la dispozitie pentru consultatii si interventii 24/7. Singurul cabinet veterinar deschis non stop, pe Aleea Mersului Nr. 002 sau la 07881232420."
        } as Business,
        {
            username: "drug",
            company_name: "Farmacie Veterinara",
            profile_picture: "",
            description: "Farmacie veterinara deschisa non-stop in zona Sectorului 1. Calea Apusului nr. 22."
        } as Business
    ]

    constructor(private utilsService: UtilsService,
        private businessService: BusinessService) {
    }   

    ngOnInit() {
        this.businessService.getExplore().subscribe((items) => {
            this.latestItems = items as Array<any>;
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
        return !item.hasOwnProperty('business');
    }

    back() {
        this.showBusiness = false;
    }

    getImagePath(username: string) {
        return "../../../assets/" + username + ".jpg";
    }
}
