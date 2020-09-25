import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {AuthGuard} from '../guards/auth.guard';



const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate : [AuthGuard],
  children: [
    { path: 'articulos', component: ArticulosComponent, canActivate: [AuthGuard]},
    { path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuard]},
    { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
