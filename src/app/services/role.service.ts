import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Area } from "../models/area.model";
import { Role } from '../models/questions.model';


@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private roles: Role[] = Object.values(Role);

    constructor(private http: HttpClient) {

    }

    getRoles(): Role[] { 
        return this.roles; 
    }
}