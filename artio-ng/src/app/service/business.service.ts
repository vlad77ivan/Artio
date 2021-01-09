import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './urlHelpers';
import { Review } from '../model/review';
@Injectable({
    providedIn: 'root',
})

export class BusinessService {

    constructor(private http: HttpClient) { }

    getBusiness(username: string) {
        return this.http.get(baseUrl + '/business/' + username);
    }


    getReviews(username: string) {
        return this.http.get(baseUrl + '/review/' + username);
    }

    postReview(review: Review) {
        return this.http.post(baseUrl + '/review', review);
    }
}   