import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../interfaces/usuario.interface';
import { Cuenta_habiente } from '../interfaces/cuenta-habiente.interface';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class CuentaHabienteService {
    public url:string;
	public identity;
	public token;
	
	constructor(private _http: Http) {
        this.url = GLOBAL.url;
        
    }

    getCuentaHabientes(token){

        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
       
        return this._http.get(this.url + 'cuentahabientes', {headers:headers})
            .map(res => {
            console.log(res.json());
            return res.json();
        })
    }


saveCuentaHabiente(token, cuentahabiente:Cuenta_habiente){

            let params = JSON.stringify(cuentahabiente);
            let headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            });
        
        return this._http.post(this.url+ 'cuentahabiente',params, {headers:headers})
            .map(res => {
            console.log(res.json());
            return res.json();
        })
    }

    editCuentaHabiente(token,id,cuenta_habiente){
        let params =JSON.stringify(cuenta_habiente);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url+'cuentahabiente/'+id, params,{headers:headers})
            .map(res =>res.json());
    }

    findCuentaHabiente(bnss){
       
        let params = JSON.stringify(bnss);
    
    return this._http.post(this.url + 'buscarcuentahabiente',params)
        .map(res => {
        console.log(res.json());
        return res.json();
    })
}

getCuentaHabiente(token,id) {     //Detalle de un cuentahabiente
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': token
    });
    
    return this._http.get(this.url + 'cuentahabiente/' + id, {headers:headers})
       .map(res => {
        console.log(res.json());
        return res.json();
    })
}

    }

