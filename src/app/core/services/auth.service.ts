import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public loggedIn = new BehaviorSubject<boolean>(false);
    private url = 'http://192.168.150.72:8000/api/token/';

    public access = '';
    public refresh = '';


    constructor(
        private http: HttpClient,
        private router: Router,
    ) {
        this.access = localStorage.getItem('access');
        this.refresh = localStorage.getItem('refresh');

        if (this.refresh) {
            this.loggedIn.next(true);
        }
    }

    login(user: User) {
        if (user.userName !== '' && user.password !== '') {

            this.http
                .post(this.url, { username: user.userName, password: user.password })
                .subscribe((res: any) => {

                    this.access = res.access;
                    this.refresh = res.refresh;

                    localStorage.setItem('access', this.access);
                    localStorage.setItem('refresh', this.refresh);


                    this.loggedIn.next(true);
                    this.router.navigate(['/']);
                });
        }
    }

    logout() {
        this.loggedIn.next(false);
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        this.router.navigate(['/login']);
    }
}
