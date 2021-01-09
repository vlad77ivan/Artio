import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { BusinessService } from 'src/app/service/business.service';
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
    } as Business;

    @Input() user = {
    } as User;
    
    newRating: number = -1;
    newReviewText: string = "";

    public reviews: Array<Review> = [];

    constructor(private utilsService: UtilsService,
        private businessService: BusinessService) {
    }

    ngOnInit() {
        this.businessService.getReviews(this.business.username).subscribe((reviews) => {
            if (reviews) {
                this.reviews = reviews as Array<Review>;
            } else {
                this.reviews = [];
            }
        })
    }

    getImage(encodedImage: string) {
        return this.utilsService.getImage(encodedImage);
    }

    postReview() {
        const newReview = {
            business: this.business.username,
            user: this.user.username,
            text: this.newReviewText,
            rating: this.newRating,
            timestamp: new Date()
        } as Review;

        this.businessService.postReview(newReview).subscribe(() => {
            this.reviews.push(newReview);
        });
    }

    updateRating(event: any) {
        this.newRating = event.value;
    }

    checkFields(): boolean {
        return this.newReviewText === '' || this.newRating === -1;
    }

    getImagePath() {
        return "../../../assets/" + this.business.username + ".jpg";
    }
}
