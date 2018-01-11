import { Component, DoCheck, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { EquiposService } from '../../../services/equipos.service';
import { MarcaService } from '../../../services/marca.service';
import { ModeloService } from '../../../services/modelo.service';

import { Equipo } from '../../../interfaces/equipos.interface';
import { Marca } from '../../../interfaces/marca.interface';
import { Modelo } from '../../../interfaces/modelo.interface';


import { Usuario } from '../../../interfaces/usuario.interface';


import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-add-pc',
  templateUrl: './add-pc-component.html',
  styleUrls: ['./equipos.component.css']
})
export class AddPcComponent implements OnInit {

    public title:String;
    public status;
    public token;
    public identity;
    public url:String;
  //  marcaid:Marca = new Marca('0','LENOVO');
    public marcas:Marca[];
    public modelos:Modelo[];
    public Datamodelos;
    public prueba;
    equipo:Equipo={
        _id:"",
        alias:"",
        nni: "",
        inventario: "",
        tipo_equipo: "",
        marca: "",
        modelo: "",
        piso: "",
        ubicacion: "",
        mac: "",
        ip: "",
        procesador: "",
        dd: "",
        ram: "",
        observaciones: "",
        activo: false,
        estatus: "",
        fecha: new Date,
        usuario: ""
    }

  constructor(
      private _usuarioService: UsuarioService,
      private _equiposService:EquiposService,
      private _marcaService:MarcaService,
      private _modeloService:ModeloService,
      private _route: ActivatedRoute,
      private _router:Router,
  ) {

    this.title ='Registro de Equipo';
    this.identity=this._usuarioService.getIdentity();
    this.token = this._usuarioService.getToken();
    this.url = GLOBAL.url;
   }

  ngOnInit() {
    this.getMarcas();
    //this.getModelos();
    
    
  }

  onSubmit(registroForm){
      this._equiposService.saveEquipo(this.token, this.equipo).subscribe(
          data =>{
              if (data){
                  this.status= 'success';
                  this.equipo=data.equipo;
                  registroForm.reset();
              }else{
                  this.status='error'
              }
          }, error =>{
            var errorMessage = <any>error;
            if(errorMessage != null){
              this.status = 'error';
            }
  
              }
      )
  }


  getMarcas(){
        
    this._marcaService.getMarcas().subscribe((res:any)=>{
      this.marcas = res.marca;
      console.log(this.marcas)
    },
      (error)=>{
        console.error("error",error)
       } )

  }
/*
  getModelos(){
        
    this._modeloService.getModelos().subscribe(response=>{
      if(!response.modelo){
        console.log('No encuentra modelos');
      }else{
        this.modelos = response.modelo;
      }
    },
    error =>{
      console.log(<any>error)
    })

  }

  handleChange(marca) {
    console.log(this.modelos)

  }*/

  onChange(marca){

    this.modelos=this._modeloService.getModelos().filter(item=>item.marca==marca); 
    console.log(this.modelos)

   
}
}