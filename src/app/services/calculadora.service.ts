import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()
export class CalculadoraService {
    
  
    



    constructor(private http: HttpClient) {
        
    }

    somar(a: number, b: number): number {
        return a + b;
    }
}


