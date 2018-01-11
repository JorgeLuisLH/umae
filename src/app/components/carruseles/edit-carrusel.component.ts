import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute, Params} from '@angular/router';
import { Cuenta_habiente } from '../../interfaces/cuenta-habiente.interface';
import { Carrusel } from '../../interfaces/carrusel.interface';
import { Servicio } from '../../interfaces/servicio.interface';


import { GLOBAL } from '../../services/global';

import { UsuarioService } from '../../services/usuario.service';
import { CuentaHabienteService } from '../../services/cuenta-habiente.service';
import { CarruselService } from '../../services/carrusel.service';
import { ServicioService } from '../../services/servicio.service';




@Component({
    selector: 'app-edit-carrusel',
    templateUrl: './add-carrusel.component.html',
})
export class EditCarruselComponent implements OnInit {
    public title:String;
    public token;
    public identity;
    public url:String;
    public servicios: Servicio[];
    public status;
    public carrusel:Carrusel;
    public id:string;
    
    cuenta_habiente:Cuenta_habiente={
        _id: "",
        nombre: "",
        paterno:"",
        materno: "",
        genero: "",
        f_nacimiento: null,
        curp: "",
        usuario: ""
      }
  
    constructor(
      private _carruselService:CarruselService,
      private _servicioService:ServicioService,
      private _usuarioService:UsuarioService,
      private _route: ActivatedRoute,
      private _router:Router
      
    ) { 
      this.title = 'Modificar Carrusel'
      this.identity = this._usuarioService.getIdentity();
      this.token =this._usuarioService.getToken();
      this.url = GLOBAL.url;
      this._route.params.subscribe(parametros=>{
        this.id=parametros['id'];
      })
    }
  
    ngOnInit() {
      console.log('Componente cargado');
      this.getCarrusel();
      this.getServicios();
    }
  
    getCarrusel(){ //Traer datos del carrusel
      this._route.params.forEach((params:Params) =>{
          let id = params['id'];
          this._carruselService.getCarrusel(this.token,id).subscribe(
          response =>{ 
              if (!response.carrusel) {
                  this._router.navigate(['/home']);
              }else{
                  this.carrusel =response.carrusel;
              }
             },
          error =>{
             console.log(<any>error);
          }
         )
       } );
  }


  onSubmit(){
    console.log(this.carrusel);
    //var id = this.carrusel._id;
    
    this._carruselService.editCarrusel(this.token, this.id, this.carrusel).subscribe(
      response => {
        if (!response.carrusel) {
          this.status ='error';
          
          this._router.navigate(['/carrusel', this.id]);
        }else{
          this.status = 'success';
          this.carrusel = response.carrusel;
  
         // this._router.navigate(['/animal', this.animal._id]);
        }
  
      },
      error => {
        var errorMessage = <any>error;
       if(errorMessage != null){
         this.status = 'error';
       }
      }
    );
  }


  getServicios(){ //LLenar select de servicios
    
    this._servicioService.getServicios().subscribe(response=>{
      if(!response.servicio){
        console.log('No encuentra Cuenta habientes');
      }else{
        this.servicios = response.servicio;
      }
    },
    error =>{
      console.log(<any>error)
    })

  }

  
  }

  