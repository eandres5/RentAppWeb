import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService} from '../../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
interface user{
  nombre: string,
  apellido: string,
  celular: string,
  correo: string, 
  img: string, 
  admin: boolean
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('email1') email1: ElementRef;
  @ViewChild('pass1') pass1: ElementRef;
  constructor(private authService: AuthService,private router: Router, private AFauth: AngularFireAuth) {}

  ngOnInit(): void {
  }

  verificacionLogin(){
    console.log("Entro a la funcion");

    this.authService.login(this.email1.nativeElement.value, this.pass1.nativeElement.value).then(res =>{
      this.AFauth.authState.subscribe(ser=>{
        this.authService.obtenerDatos(ser.uid).subscribe(usa=>{
          const data : user = usa.payload.data() as user;
          if(data.admin==true){
            console.log("usuario admin");
            this.irHome();
          }else{
            alert("Usted no esta registrado como usuario Administrador");
            this.AFauth.signOut().then(auth => {
              console.log('Sesion cerrada');
              this.router.navigate(['']);
            })
          }
        })
      })
    }).catch(err => alert('Los datos son incorrectos o el usuario no existe'));
  }

  irHome(){
    this.router.navigate(['/home/inicio']);
  }

}
