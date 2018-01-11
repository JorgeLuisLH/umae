import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute, Params} from '@angular/router';

import { CarruselService } from '../../services/carrusel.service';
import { Carrusel } from '../../interfaces/carrusel.interface';

@Component({
  selector: 'app-carrusel-detalle',
  templateUrl: './carrusel-detalle.component.html',
  styles: []
})
export class CarruselDetalleComponent implements OnInit {

  public title:String;
  public carrusel:Carrusel;
  public token;

  constructor(
    private _carruselService:CarruselService,
    private _route: ActivatedRoute,
    private _router:Router
  ) { 
    this.title = 'Detalle'
  }

  ngOnInit() {
    console.log('Componente cargado');
    this.getCarrusel();
  }

  getCarrusel(){
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

}
