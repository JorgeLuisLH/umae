import { Component, DoCheck, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, DoCheck {
  public title:string;
  public identity;

  constructor(
    private _usuarioService:UsuarioService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit(){
    this.identity = this._usuarioService.getIdentity();
  }


  ngDoCheck(){
  	//console.log('El DoChechk se ha ejecutado');
    this.identity = this._usuarioService.getIdentity();

  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

}
