
import { Component, DoCheck, OnInit } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import { CuentaHabienteService } from '../../services/cuenta-habiente.service';
import { Cuenta_habiente } from '../../interfaces/cuenta-habiente.interface';
import { UsuarioService } from '../../services/usuario.service';
import { CarruselService } from '../../services/carrusel.service';
import { ServicioService } from '../../services/servicio.service';
import { Carrusel } from '../../interfaces/carrusel.interface';
import { Servicio } from '../../interfaces/servicio.interface';


import { GLOBAL} from '../../services/global';




@Component({
    selector: 'app-add-carrusel',
    templateUrl: './add-carrusel.component.html',
})
export class AddCarruselComponent implements OnInit, DoCheck {
    public title:String;
    public token;
    public identity;
    public url:String;
    public status;
    public servicios: Servicio[];
    cuenta_habiente:Cuenta_habiente={
        _id: "",
        nombre: "",
        paterno:"",
        materno: "",
        genero: "",
        f_nacimiento: new Date(),
        curp: "",
        usuario: ""
      }
      carrusel:Carrusel={
        nss: "", 
        f_ingreso: new Date(),
        diagnostico: "",
        completo: false,
        estatus_carrusel: "",
        f_estatus: new Date(),
        cama: "",
        anotaciones: "",
        servicio: "",
        f_egreso: new Date(),
        cuenta_habiente: "",
        usuario: ""
      }
public bnss;
    constructor(
        private _cuentaHabienteService:CuentaHabienteService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _usuarioService:UsuarioService,
        private _carruselService:CarruselService,
        private _servicioService:ServicioService

    ) { 
        this.title ='Carrusel';
        this.identity = this._usuarioService.getIdentity();
        this.token =this._usuarioService.getToken();
        this.url = GLOBAL.url;
        
    }

    ngOnInit() { 
        this.getCuentaHabiente();
        this.getServicios();
    }

    ngDoCheck() {
        //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
        //Add 'implements DoCheck' to the class.
        
    }

    buscarnss(){
        console.log(this.cuenta_habiente._id);
        this._cuentaHabienteService.findCuentaHabiente(this.bnss).subscribe(
            data=>{
            if(data.bnss.nss){
              
              this.cuenta_habiente._id = data.bnss.nss;
            }else{
              console.log('No encuentra Cuenta habientes');
              this.cuenta_habiente._id = data.bnss;
            }
          },
          error =>{
            console.log(<any>error)
          })

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

    onSubmit(registroForm){
        console.log(this.carrusel);
        this._route.params.forEach((params:Params) =>{
            let cuenta_habiente_id = params['id'];
            this.carrusel.cuenta_habiente = cuenta_habiente_id;
            console.log(cuenta_habiente_id);

        this._carruselService.saveCarrusel(this.token, this.carrusel).subscribe(
            data =>{
                if (data.carrusel == '') {
                    this.status = 'error';
                    
                    
                  }else{
                    this.status ='success';
                    
                    this.carrusel = data.carrusel;
                    this._router.navigate(['/carruseles']);
                  }
              
            }, error =>{
                var errorMessage = <any>error;
                if(errorMessage != null){
                  this.status = 'error';
                }
      
                  }
          )
        });
    }



    getServicios(){
        
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