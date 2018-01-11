import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public title:String;
  public status:String;
  public identity;
  public token;
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
    private _usuarioService: UsuarioService,
    private _router: ActivatedRoute,
    private _route: Router
    
  ) {
    this.title = 'Login';
    
   }

  ngOnInit() {
    console.log('Servicio lanzado');
  } 

  loginForm(){
    //Logear al usuario y conseguir el objeto
		this._usuarioService.login(this.usuario).subscribe(
			response => {
				this.identity = response.usuario;

				if (!this.identity || !this.identity._id) {
					alert('El usuario no se a logeado correctamente');
					// code...
				}else{
					this.identity.password ='';
					localStorage.setItem('identity', JSON.stringify(this.identity));
					this.status= 'success';

					//conseguir el token
					this._usuarioService.login(this.usuario, 'true').subscribe(
						response => {
							this.token = response.token;
							if (this.token.length <= 0) {
								alert('El token no se ha generado');
							}else{
								localStorage.setItem('token', this.token);
								this.status='success';

								this._route.navigate(['/']);


							}
						}
						)
				} 
			},
			error =>{
				var errorMessage = <any>error;
				if (errorMessage != null) {
					var body = JSON.parse(error._body);
					this.status ='error';
				}
			}
		);

  }

}
