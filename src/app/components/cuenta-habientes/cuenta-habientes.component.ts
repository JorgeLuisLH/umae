import { Component, DoCheck, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';

import { CuentaHabienteService } from '../../services/cuenta-habiente.service';
import { UsuarioService } from '../../services/usuario.service';

import { Cuenta_habiente } from '../../interfaces/cuenta-habiente.interface';
import { SearchPipe } from '../../pipes/search.pipes';

import { GLOBAL } from '../../services/global';




@Component({
  selector: 'app-cuenta-habientes',
  templateUrl: './cuenta-habientes.component.html',

})
export class CuentaHabientesComponent implements OnInit {

  public title:String;
  public token;
  public cuenta_habientes:Cuenta_habiente[];
  public busqueda;
  public identity;
  public url: string;

  constructor(
    private _router: ActivatedRoute,
    private _route: Router,
    private _usuarioService: UsuarioService,
    private _cuentaHabienteService: CuentaHabienteService
    
  ) { 

    this.title = 'Cuenta Habientes';
    this.identity = this._usuarioService.getIdentity();
    this.token =this._usuarioService.getToken();
    this.url = GLOBAL.url;
    

    
  }

  ngOnInit() {
    this.getCuentaHabientes();
    
    
  }

  getCuentaHabientes(){
    
    this._cuentaHabienteService.getCuentaHabientes(this.token).subscribe(response=>{
      if(!response.cuenta_habiente){
        console.log('No encuentra Cuenta habientes');
      }else{
        this.cuenta_habientes = response.cuenta_habiente;
      }
    },
    error =>{
      console.log(<any>error)
    })

  }

}
