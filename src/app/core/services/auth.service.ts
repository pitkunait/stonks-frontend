import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { UserLogin } from '../interfaces/userLogin.interface';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { TokenPair } from '../interfaces/tokenPair.interface';


@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public loggedIn = new BehaviorSubject<boolean>(false);
    private url = 'http://0.0.0.0:8000/api/token/';

    constructor(
        private http: HttpClient,
        private router: Router,
        private tokenService: TokenService,
    ) {
        if (this.tokenService.hasToken()) {
            this.loggedIn.next(true);
        }
    }

    login(user: UserLogin) {
        if (user.username !== '' && user.password !== '') {
            this.http
                .post(this.url, user)
                .subscribe(async(res: TokenPair) => {
                    this.tokenService.setTokenPair(res);
                    this.loggedIn.next(true);
                    await this.router.navigate(['/dashboard']);
                });
        }
    }

    async logout() {
        this.loggedIn.next(false);
        this.tokenService.deleteTokens();
        await this.router.navigate(['/login']);
    }
}
