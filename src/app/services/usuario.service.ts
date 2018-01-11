import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { Http, Headers } from '@angular/http';
import { Usuario } from '../interfaces/usuario.interface';
import 'rxjs/Rx';





@Injectable()
export class UsuarioService {

    public url:String;
    public identity;
	public token;

    constructor(private _http:Http){
        console.log("Servicio Listo")
        this.url = GLOBAL.url;
    }


    nuevoUsuario (usuario:Usuario){

        let params = JSON.stringify(usuario);
        let headers = new Headers({'Content-Type': 'application/json'});
    
    return this._http.post(this.url+ 'registro',params, {headers})
        .map(res => {
        console.log(res.json());
        return res.json();
    })
}

login(usuario_to_login, gettoken = null){
    if (gettoken != null) {
        usuario_to_login.gettoken = gettoken;
        // code...
    }
    let params = JSON.stringify(usuario_to_login);
    let headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.url+ 'login', params, {headers: headers})
    .map(res => {
        console.log(res.json());
        return res.json();
    })
}

getIdentity(){
    let identity =JSON.parse(localStorage.getItem('identity'));
    if (identity != "undefined") {
        this.identity = identity;
    }else{
        this.identity = null;
    }
    return this.identity;
}
getToken(){
    let token= localStorage.getItem('token');

    if (token != "undefined") {

        this.token =token;
    }else{
        this.token = null;
    }
    return this.token;
}
}