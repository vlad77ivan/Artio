import { OnInit, Component, Input } from "@angular/core";
import { Review } from "src/app/model/review";

@Component({
    selector: 'review-component',
    templateUrl: './review.component.html',
    styleUrls: ['./review.component.scss']
})

export class ReviewComponent implements OnInit {
    @Input() inputReview = {} as Review;

    constructor() {
    }

    ngOnInit() {
    }

}