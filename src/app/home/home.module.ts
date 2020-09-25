import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ArticulosComponent } from './articulos/articulos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MomentModule } from 'angular2-moment';
import { InicioComponent } from './inicio/inicio.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [ArticulosComponent, UsuariosComponent, InicioComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MomentModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class HomeModule { }