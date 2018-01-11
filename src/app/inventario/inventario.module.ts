import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InventarioRoutingModule } from './inventario-routing.module';

//Componentes

import { MainComponent } from './components/main/main.component';
import { ListaEquipoComponent } from './components/lista-equipo/lista-equipo.component';
import { AddPcComponent } from './components/equipos/add-pc.component';
import { EquiposComponent } from './components/equipos/equipos.component';



//Servicios
import { UsuarioService } from '../services/usuario.service';
import { MarcaService } from '../services/marca.service';
import { ModeloService } from '../services/modelo.service';




//Guards
import { UsuarioGuard } from '../services/usuario.guards';



@NgModule({
    declarations: [
        MainComponent,
        ListaEquipoComponent,
        EquiposComponent,
        AddPcComponent
    ],
    imports: [ CommonModule,
        FormsModule,
        HttpClientModule,
        InventarioRoutingModule ],
    exports: [
        MainComponent,
        ListaEquipoComponent,
        AddPcComponent
    ],
    providers: [
        UsuarioService,
        UsuarioGuard,
        MarcaService,
        ModeloService
    ],
})
export class InventarioModule {}