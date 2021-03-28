import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ArticulosComponent } from './articulos/articulos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MomentModule } from 'angular2-moment';
import { InicioComponent } from './inicio/inicio.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ArticuloseliminadosComponent } from './articuloseliminados/articuloseliminados.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { UseradminComponent } from './useradmin/useradmin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [ArticulosComponent, UsuariosComponent, InicioComponent, ArticuloseliminadosComponent, UseradminComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MomentModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class HomeModule { }