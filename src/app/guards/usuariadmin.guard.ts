import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {map,tap} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
interface user{
  nombre: string,
  apellido: string,
  celular: string,
  correo: string, 
  img: string, 
  admin: boolean,
  superadmin: boolean
}


@Injectable({
  providedIn: 'root'
})

export class UsuariadminGuard implements CanActivate {
  constructor(private AFauth: AngularFireAuth, private router: Router, private auth:AuthService){

  }
  canActivate(): Observable<boolean> | Promise <boolean> | boolean{
    return this.auth.user$.pipe(map((authe => authe && this.auth.isSU(authe) )),
      tap((canEdit)=>{
        if(!canEdit){
          alert("Acceso denegado");
          this.router.navigate(['/home/usuarios']);
        }
      })
      );
  }

  
}
