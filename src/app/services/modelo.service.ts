import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ModeloService {

    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }


    getModelos() {  //Trae todos los datos

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this._http.get(this.url + 'modelos', { headers: headers })
    }
}