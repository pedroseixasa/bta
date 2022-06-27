import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Area } from "../models/area.model";


@Injectable()
export class AreaService {
    private areas: Area[] = [
        {
            id: "frontend",
            name: 'frontend',
            dataCriacao: new Date(Date.now()),
            utilizador: "string",
            categorias: [
                {
                    id: "Angular",
                    dataCriacao: new Date(Date.now()),
                    utilizador: "string",
                    idArea: 1,
                    name: "Angular"
                },
                {
                    id: "html",
                    dataCriacao: new Date(Date.now()),
                    utilizador: "string",
                    idArea: 1,
                    name: "Html"
                },
            ]
        },
        {
            id: "backend",
            name: 'backend',
            dataCriacao: new Date(Date.now()),
            utilizador: "string",
            categorias: [
                {
                    id: "java",
                    dataCriacao: new Date(Date.now()),
                    utilizador: "string",
                    idArea: 2,
                    name: "java"
                },
                {
                    id: "maevan",
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