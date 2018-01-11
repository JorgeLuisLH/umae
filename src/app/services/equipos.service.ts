import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Http, Headers } from '@angular/http';
import { Equipo } from '../interfaces/equipos.interface';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EquiposService {

    public url: string;
    public identity;
    public token;

    constructor(private _http: Http) {
        console.log("Servicio equipo Listo")
        this.url = GLOBAL.url;
    }


    getEquipos(token){

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.get(this.url + 'pcs', { headers: headers }).map(res => {
            console.log(res.json());
            return res.json();
        })
    }

    saveEquipo(token, equipo:Equipo){
    
        let params= JSON.stringify(equipo);
        let headers= new Headers({
            'Content-Type':'application/json',
            'Authorization': token
        });

        return this._http.post(this.url+'pc',params,{headers:headers})
        .map(res =>{
            console.log(res.json());
            return res.json();
        })
    }
}