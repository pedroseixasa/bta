import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Area } from "../models/area.model";


@Injectable()
export class AreaService {
    private areas: Area[] = [
        {
            id: 1,
            name: 'frontend',
            dataCriacao: new Date(Date.now()),
            utilizador: "string",
            categorias: [
                {
                    id: 1,
                    dataCriacao: new Date(Date.now()),
                    utilizador: "string",
                    idArea: 1,
                    name: "Angular"
                },
                {
                    id: 2,
                    dataCriacao: new Date(Date.now()),
                    utilizador: "string",
                    idArea: 1,
                    name: "Html"
                },
            ]
        },
        {
            id: 2,
            name: 'backend',
            dataCriacao: new Date(Date.now()),
            utilizador: "string",
            categorias: [
                {
                    id: 3,
                    dataCriacao: new Date(Date.now()),
                    utilizador: "string",
                    idArea: 2,
                    name: "java"
                },
                {
                    id: 4,
                    dataCriacao: new Date(Date.now()),
                    utilizador: "string",
                    idArea: 2,
                    name: "maevan"
                },
            ]
        }
    ];

    constructor(private http: HttpClient) {

    }

    getAreas(): Area[] { return this.areas; }
}