import { Injectable } from '@angular/core';
import { TokenService } from './token.service';


@Injectable({
    providedIn: 'root',
})
export class RequestService {

    constructor(private tokenService: TokenService) { }




}
