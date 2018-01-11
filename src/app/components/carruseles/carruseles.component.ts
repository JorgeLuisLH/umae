import { Component, OnInit, Inject } from '@angular/core';
import * as jsPDF from 'jspdf'
import {Router,ActivatedRoute, Params} from '@angular/router';

import { UsuarioService } from '../../services/usuario.service';

import { CarruselService } from '../../services/carrusel.service';
import { Carrusel } from '../../interfaces/carrusel.interface';
import { GLOBAL } from '../../services/global';



@Component({
  selector: 'app-carruseles',
  templateUrl: './carruseles.component.html',
  styles: []
})
export class CarruselesComponent implements OnInit {
  public title:String;
  public token;
  public busqueda;
  public identity;
  public url;
  public carruseles: Carrusel[];

  constructor(
    
    private _route: ActivatedRoute,
    private _router: Router,
    private _usuarioService: UsuarioService,
    private _carruselService: CarruselService

  ) { 
    this.title='Lista de Carrusel';
    this.identity = this._usuarioService.getIdentity();
    this.token =this._usuarioService.getToken();
    this.url = GLOBAL.url;
    this.carruseles;
  }

  ngOnInit() {
    this.getCarruseles();
    
  }

  getCarruseles(){
    
    this._carruselService.getCarruseles(this.token).subscribe(response=>{
      if(!response.carrusel){
        console.log('No encuentra Cuenta habientes');
      }else{
        this.carruseles = response.carrusel;
      }
    },
    error =>{
      console.log(<any>error)
    })

  }


}
