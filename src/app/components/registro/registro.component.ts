import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../interfaces/usuario.interface';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  public title: String;
  public status: string;
  usuario:Usuario={
    _id: "",
    nombre: "",
    paterno:"",
    materno: "",
    email: "",
    categoria: "",
    perfil: "USUARIO",
    password: "",


  }

  constructor(
    private _usuarioService:UsuarioService
  ) { 
    this.title = 'Registro de Usuario';

   

  }

  ngOnInit() {
  }

  registro(registroForm){
    this._usuarioService.nuevoUsuario(this.usuario).subscribe(
      data =>{
        if (data.usuario && data.usuario._id) {
					this.usuario = data.usuario;
					this.status='success';
					registroForm.reset();
				}else{
					  
					  this.status= 'error';
        }
        
      }, error =>{
				console.log(<any>error);

			}
    )
    }

}
