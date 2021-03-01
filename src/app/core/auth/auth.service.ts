import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user.interface';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { TokenPair } from '../interfaces/tokenPair';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public loggedIn = new BehaviorSubject<boolean>(false);
    private url = 'token/';

    constructor(
        private http: HttpClient,
        private router: Router,
        private tokenService: TokenService,
    ) {
        if (this.tokenService.hasToken()) {
            this.loggedIn.next(true);
        }
    }

    login(user: User) {
        if (user.username !== '' && user.password !== '') {
            this.http
                .post(this.url, user)
                .subscribe(async (res: TokenPair) => {
                    this.tokenService.setTokenPair(res);
                    this.loggedIn.next(true);
                    await this.router.navigate(['/']);
                });
        }
    }

    async logout() {
        this.loggedIn.next(false);
        this.tokenService.deleteTokens();
        await this.router.navigate(['/login']);
    }
}