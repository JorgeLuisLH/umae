import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute, Params} from '@angular/router';

import { CuentaHabienteService } from '../../services/cuenta-habiente.service';
import { UsuarioService } from '../../services/usuario.service';
import { Cuenta_habiente } from '../../interfaces/cuenta-habiente.interface';

@Component({
    selector: 'app-edit-cuenta-habiente',
    templateUrl: './add-cuenta-habiente.component.html'
})
export class EditCuentaHabienteComponent implements OnInit {

    public title:string;
    public cuenta_habiente:Cuenta_habiente;
    public token;
    public identity;
    public id:string;
    public status;
    constructor(
        private _cuentaHabienteService:CuentaHabienteService,
        private _route:ActivatedRoute,
        private _router:Router,
        private _usuarioService:UsuarioService,
    ) {
        this.title = 'Modificar Derecho Habiente';
        this.identity = this._usuarioService.getIdentity();
        this.token =this._usuarioService.getToken();
        this._route.params.subscribe(parametros=>{
            this.id=parametros['id'];
          })
        
        
     }

    ngOnInit() {
        this.getCuentaHabiente();
     }

     getCuentaHabiente(){
        this._route.params.forEach((params:Params) =>{
            let id = params['id'];
            this._cuentaHabienteService.getCuentaHabiente(this.token,id).subscribe(
            response =>{ 
                if (!response.cuenta_habiente) {
                    this._router.navigate(['/home']);
                }else{
                    this.cuenta_habiente =response.cuenta_habiente;
                }
               },
            error =>{
               console.log(<any>error);
            }
           )
         } );
    }

    onSubmit(){
        console.log(this.cuenta_habiente);
        //var id = this.carrusel._id;
        
        this._cuentaHabienteService.editCuentaHabiente(this.token, this.id, this.cuenta_habiente).subscribe(
          response => {
            if (!response.cuenta_habiente) {
              this.status ='error';
              
              this._router.navigate(['/cuenta-habientes']);
            }else{
              this.status = 'success';
              this.cuenta_habiente = response.cuenta_habiente;
      
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
    

    

}