import { Component, DoCheck, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';

import { CuentaHabienteService } from '../../services/cuenta-habiente.service';
import { UsuarioService } from '../../services/usuario.service';

import { Cuenta_habiente } from '../../interfaces/cuenta-habiente.interface';
import { SearchPipe } from '../../pipes/search.pipes';

import { GLOBAL } from '../../services/global';


@Component({
    selector: 'app-add-cuenta-habiente',
    templateUrl: './add-cuenta-habiente.component.html',
})
export class AddCuentaHabienteComponent implements OnInit {
    public title:String;
    public status;
    public token;
    public identity;
    public url:String;
    cuenta_habiente:Cuenta_habiente={
      _id: "",
      nombre: "",
      paterno:"",
      materno: "",
      genero: "",
      f_nacimiento: new Date(),
      curp: "",
      usuario: ""
    }
    constructor(
        private _cuentaHabienteService:CuentaHabienteService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _usuarioService: UsuarioService,
        
    ) { 
        this.title="Registrar Cuenta Habiente";
        this.identity = this._usuarioService.getIdentity();
        this.token =this._usuarioService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit() { }

    onSubmit(registroForm){
        this._cuentaHabienteService.saveCuentaHabiente(this.token, this.cuenta_habiente).subscribe(
            data =>{
                if (data.cuenta_habiente && data.cuenta_habiente._id) {
                    this.status ='success';
                    this.cuenta_habiente = data.cuenta_habiente;
                    registroForm.reset();
                    
                  }else{
                    this.status = 'error';
                    
                  }
              
            }, error =>{
                var errorMessage = <any>error;
                if(errorMessage != null){
                  this.status = 'error';
                }
      
                  }
          )
    }
}