import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from './usuario.service'

@Injectable()

export class UsuarioGuard implements CanActivate{
	constructor(
		private _router:Router,
		private _usuarioService: UsuarioService
		){}
	canActivate(){
		let identity =this._usuarioService.getIdentity();

		if(identity){
			return true;

		}else{
			this._router.navigate(['/home']);
			return false;
		}
	}
}
