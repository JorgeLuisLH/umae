import { Component, DoCheck, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';

import { UsuarioService } from '../../../services/usuario.service';
import { EquiposService } from '../../../services/equipos.service';
import { Equipo } from '../../../interfaces/equipos.interface';

import { Usuario } from '../../../interfaces/usuario.interface';


import { GLOBAL } from '../../../services/global';




@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.css']
})

export class ListaEquipoComponent implements OnInit {

  public title:String;
  public token;
  public equipos:Equipo[];
  public busqueda;
  public identity;
  public url: string;

  constructor(
    private _router: ActivatedRoute,
    private _route: Router,
    private _usuarioService: UsuarioService,
    private _equiposService: EquiposService
    
  ) { 

    this.title = 'Inventario';
    this.identity = this._usuarioService.getIdentity();
    this.token =this._usuarioService.getToken();
    this.url = GLOBAL.url;
    

    
  }

  ngOnInit() {
    this.getEquipos();
    
    
  }

  getEquipos(){
    
    this._equiposService.getEquipos(this.token).subscribe(response=>{
      if(!response.equipos){
        console.log('No encuentran los  equipos');
      }else{
        this.equipos = response.equipos;
      }
    },
    error =>{
      console.log(<any>error)
    })

  }
}