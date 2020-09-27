import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ArticulosComponent } from './articulos/articulos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MomentModule } from 'angular2-moment';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { FiltroArticuloPipe } from './pipes/filtro-articulo.pipe';


@NgModule({
  declarations: [
    ArticulosComponent, 
    UsuariosComponent, 
    InicioComponent,
    FiltroArticuloPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MomentModule,
    FormsModule
  ]
})
export class HomeModule { }