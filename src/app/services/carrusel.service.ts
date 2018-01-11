import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../interfaces/usuario.interface';
import { Cuenta_habiente } from '../interfaces/cuenta-habiente.interface';
import { Carrusel } from '../interfaces/carrusel.interface';
import 'rxjs/Rx';

@Injectable()
export class CarruselService {

    public url: string;
    public identity;
    public token;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }


    getCarruseles(token) {  //Trae todos los datos

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        return this._http.get(this.url + 'carruseles', { headers: headers }).map(res => {
            console.log(res.json());
            return res.json();
        })
    }

    getCarrusel(token,id) {     //Detalle de un carrusel
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.get(this.url + 'carrusel/' + id).map(res => {
            console.log(res.json());
            return res.json();
        })
    }

    saveCarrusel(token, carrusel:Carrusel){
    
                let params = JSON.stringify(carrusel);
                let headers = new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': token
                });
            
            return this._http.post(this.url+ 'carrusel',params, {headers:headers})
                .map(res => {
                console.log(res.json());
                return res.json();
            })
        }

    findCarrusel(token, nss){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        let params = JSON.stringify(nss);
    
    return this._http.post(this.url+ 'buscarcarrusel',params, {headers})
        .map(res => {
        console.log(res.json());
        return res.json();
    })
}

editCarrusel(token,id,carrusel){
    let params =JSON.stringify(carrusel);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
    });
    return this._http.put(this.url+'carrusel/'+id, params,{headers:headers})
        .map(res =>res.json());
}





}