import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
//Componentes

import { MainComponent } from './components/main/main.component';
import { ListaEquipoComponent } from './components/lista-equipo/lista-equipo.component';
import { AddPcComponent } from './components/equipos/add-pc.component';

import { UsuarioGuard } from '../services/usuario.guards';








const inventarioRoutes:Routes =[
    {

    path:'inventario-panel',
    component: MainComponent,
    canActivate:[UsuarioGuard],
    children:[
        {path:'', redirectTo: 'equipos', pathMatch:'full'},
        {path: 'equipos', component: ListaEquipoComponent},
        {path: 'registro', component: AddPcComponent}

    ]

    }];

@NgModule({
    imports: [ 
        RouterModule.forChild(inventarioRoutes)
     ],
    exports: [
        RouterModule
    ],
   
})
export class InventarioRoutingModule {}