import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LOCALE_ID } from '@angular/core';

//Importar nuestro modulo
import { InventarioModule } from './inventario/inventario.module';


//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { UsuarioService } from './services/usuario.service';
import { CuentaHabienteService } from './services/cuenta-habiente.service';
import { CarruselService } from './services/carrusel.service';
import { ServicioService } from './services/servicio.service';
import { EquiposService } from './services/equipos.service';




//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CuentaHabientesComponent } from './components/cuenta-habientes/cuenta-habientes.component';
import { EditCuentaHabienteComponent } from './components/cuenta-habientes/edit-cuenta-habiente.component';

import { AddCuentaHabienteComponent } from './components/cuenta-habientes/add-cuenta-habiente.component';

import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AddCarruselComponent } from './components/carruseles/add-carrusel.component';
import { EditCarruselComponent } from './components/carruseles/edit-carrusel.component';


//Guards
import { SearchPipe } from './pipes/search.pipes';
import { SearchCarruselPipe } from './pipes/searchCarrusel.pipes';
import { UsuarioGuard } from './services/usuario.guards';


import { CarruselesComponent } from './components/carruseles/carruseles.component';
import { CarruselDetalleComponent } from './components/carrusel-detalle/carrusel-detalle.component';
import { PdfCarruselComponent } from './components/carruseles/pdf-carrusel.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CuentaHabientesComponent,
    EditCuentaHabienteComponent,
    AddCuentaHabienteComponent,
    RegistroComponent,
    LoginComponent,
    SearchPipe,
    SearchCarruselPipe,
    CarruselesComponent,
    CarruselDetalleComponent,
    AddCarruselComponent,
    EditCarruselComponent,
    PdfCarruselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InventarioModule,
    APP_ROUTING
  ],
  providers: [
    UsuarioService,
    CuentaHabienteService,
    CarruselService,
    ServicioService,
    UsuarioGuard,
    EquiposService,
    {provide: LOCALE_ID, useValue:'es' }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
