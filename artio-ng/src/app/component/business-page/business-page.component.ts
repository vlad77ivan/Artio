import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UtilsService } from 'src/app/service/utils.service';
import { Business } from '../../model/business';
import { Review } from '../../model/review';
@Component({
    selector: 'business-page-component',
    templateUrl: './business-page.component.html',
    styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent implements OnInit {
    @Input() business = {
        username: "socului_rulz",
        companyName: "Shaormeria Socului",
        profilePhoto: "a",
        description: "Buna ziua avem shaorma fffffff mare si ffff buna si fffffff mare si ffff buna si fffffff mare si ffff buna si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si sarmale si cripsy si tot ce vrea plt hai barosane sau comanda la numarul 0792 constipatie amandoi"
    } as Business;

    newRating: number = -1;
    newReviewText: string = "";

    public user: User = {
        username: "milbay",
        firstname: "Mill",
        lastname: "Bay",

        profilePhoto: "caca",
        description: "."
    };

    public reviews: Array<Review> = [
        {
            text: "peste medie o fost super tare",
            timestamp: new Date(),
            rating: 3,
            user: this.user,
            business: this.business
        },
        {
            text: "peste medie o fost super tare cea mai smechera cu de toate",
            timestamp: new Date(),
            rating: 5,
            user: this.user,
            business: this.business
        },
        {
            text: "naspa tare ketchup ieftin",
            timestamp: new Date(),
            rating: 2,
            user: this.user,
            business: this.business
        },
    ];

    constructor(private utilsService: UtilsService) {
    }

    ngOnInit() {
    }

    getImage(encodedImage: string) {
        return this.utilsService.getImage(encodedImage);
    }
    
    postReview() {
        console.log(this.newRating);
        console.log(this.newReviewText);
    }

    updateRating(event: any) {
        this.newRating = event.value;
    }
}
