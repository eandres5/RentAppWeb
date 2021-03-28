import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
interface user{
  nombre: string,
  apellido: string,
  celular: string,
  correo: string, 
  img: string, 
  admin: boolean,
  superadmin: boolean
}
@Component({
  selector: 'app-headerrent',
  templateUrl: './headerrent.component.html',
  styleUrls: ['./headerrent.component.css']
})
export class HeaderrentComponent implements OnInit {
  public usersR : any =[];
  public userA: any=[];
  public nombre;
  public url;
  constructor(private AFauth: AngularFireAuth,private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
    this.nombres();
  }
  logout(){
    this.AFauth.signOut().then(auth => {
      console.log('Sesion cerrada');
      this.router.navigate(['']);
    })
  }
  nombres(){
    this.AFauth.authState.subscribe(ser=>{
      this.auth.obtenerDatos(ser.uid).subscribe(usa=>{
        const data : user = usa.payload.data() as user;
        this.url=data.img;
        if(data.superadmin==true){
          console.log("usuario superadmin");
          this.nombre= ser.displayName + " (SuperAdmin)"

        }else{
          console.log("usuario no superadmin");
          this.nombre= ser.displayName + " (Admin)"
        }
      })
    })
  }
  userAdmin(){
    this.AFauth.authState.subscribe(ser=>{
      this.auth.obtenerDatos(ser.uid).subscribe(usa=>{
        const data : user = usa.payload.data() as user;
        if(data.superadmin==true){
          console.log("usuario superadmin");
          this.router.navigate(['/home/useradmin']);
        }else{
          console.log("usuario no superadmin");
          this.router.navigate(['/home/usuarios']);
        }
      })
    })
  }

}
