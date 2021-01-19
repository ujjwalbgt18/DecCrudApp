import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    redirectUrl: string;
    baseUrl: string = "http://localhost/laravelApi/api";

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    constructor(private httpClient: HttpClient) { }
    public userlogin(email, password) {
        alert(email)
        return this.httpClient.post<any>(this.baseUrl + '/login', { email, password })
            .pipe(map(Users => {
                this.setToken(Users[0].name);
                this.getLoggedInName.emit(true);
                return Users;
            }));
    }

    public userregistration(name, email, password, c_password) {
        return this.httpClient.post<any>(this.baseUrl + '/register', { name, email, password, c_password })
            .pipe(map(Users => {
                return Users;
            }));
    }

    //token
    setToken(token: string) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    deleteToken() {
        localStorage.removeItem('token');
    }
    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken != null) {
            return true
        }
        return false;
    }
}