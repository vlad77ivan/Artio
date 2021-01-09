import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { baseUrl } from './urlHelpers';
import { Post } from '../model/post';
@Injectable({
    providedIn: 'root',
})

export class UsersService {

    constructor(private http: HttpClient) { }

    getUser(username: string) {
        return this.http.get(baseUrl + '/user/' + username);
    }

    getPosts(username: string) {
        return this.http.get(baseUrl + '/post/' + username);
    }

    makePost(post: Post) {
        return this.http.post(baseUrl + '/post', post);
    }

    logIn(username: string, password: string) {
        return this.http.post(baseUrl + '/login',  {
            username: username,
            password: password
        });
    }

    signUp(newUser: User) {
        return this.http.post(baseUrl + '/user', newUser);
    }
}   