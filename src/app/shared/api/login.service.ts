import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Login } from 'src/app/login/login';

@Injectable()
export class LoginService extends GenericService<Login> {

    constructor(protected http: HttpClient, protected service: string){
        super(http, 'login');
    }
}