import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { baseUrl } from './urlHelpers';
@Injectable({
    providedIn: 'root',
})

export class UsersService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 
          'Access-Control-Allow-Origin':'*'
        })
    }

    getUser(username: string) {
        return this.http.get(baseUrl + '/user/' + username);
    }

    logIn(username: string, password: string) {
        return this.http.post(baseUrl + '/login',  {
            username: username,
            password: password
        });
    }

    signUp(newUser: User) {
        return this.http.post(baseUrl + '/user', newUser, this.httpOptions);
    }
}   