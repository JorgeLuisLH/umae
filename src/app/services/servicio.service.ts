import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Http, Headers } from '@angular/http';
import { Servicio } from '../interfaces/servicio.interface';
import 'rxjs/Rx';

@Injectable()
export class ServicioService {

    public url: string;
    public identity;
    public token;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }


    getServicios() {  //Trae todos los datos

        let headers = new Headers({
            'Content-Type': 'application/json',
        });

        return this._http.get(this.url + 'servicios', { headers: headers }).map(res => {
            console.log(res.json());
            return res.json();
        })
    }
}