import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MarcaService {

    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient) {
        this.url = GLOBAL.url;
    }


    getMarcas() {  //Trae todos los datos

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });

        return this._http.get(this.url + 'marcas', { headers: headers });
    }
}