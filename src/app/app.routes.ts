import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CuentaHabientesComponent } from './components/cuenta-habientes/cuenta-habientes.component';
import { EditCuentaHabienteComponent } from './components/cuenta-habientes/edit-cuenta-habiente.component';

import { AddCuentaHabienteComponent } from './components/cuenta-habientes/add-cuenta-habiente.component';

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CarruselesComponent } from './components/carruseles/carruseles.component';
import { CarruselDetalleComponent } from './components/carrusel-detalle/carrusel-detalle.component';
import { AddCarruselComponent } from './components/carruseles/add-carrusel.component';
import { EditCarruselComponent } from './components/carruseles/edit-carrusel.component';
import {PdfCarruselComponent } from './components/carruseles/pdf-carrusel.component';


//Servicios
import { UsuarioGuard } from './services/usuario.guards';










const APP_ROUTES: Routes = [
    
    
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'cuenta-habientes', canActivate: [UsuarioGuard], component: CuentaHabientesComponent },
    { path: 'cuenta-habiente', component: AddCuentaHabienteComponent },
    { path: 'cuenta-habiente/editar/:id', component: EditCuentaHabienteComponent },
    { path: 'carruseles',  canActivate: [UsuarioGuard],component: CarruselesComponent },
    { path: 'carrusel/:id', component: CarruselDetalleComponent },
    { path: 'addcarrusel/:id', component: AddCarruselComponent },
    { path: 'carrusel/editar/:id', component: EditCarruselComponent},
    { path: 'carrusel', component: AddCarruselComponent },
    { path: 'pdf-carrusel', component: PdfCarruselComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
    
    ];
    


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
