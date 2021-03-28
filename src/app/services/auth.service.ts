import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import {map, switchMap} from 'rxjs/operators';
import {firestore} from 'firebase';
import { Observable, of } from 'rxjs';
import {User} from '../models/user.interface';

interface user{
  uid: string,
  nombre: string,
  apellido: string,
  celular: string,
  correo: string, 
  img: string,
  admin: boolean,
  inhabilitado: boolean,
  superadmin: boolean,
  razones:{
    date: Date,
    razon: string
  }
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public v: boolean;
  public bloqueo: boolean;
  public admi: boolean;
  public userA: any[];
  public user$: Observable<User>
  constructor(private AFauth: AngularFireAuth, private router: Router, private db: AngularFirestore) {
    this.user$ = this.AFauth.authState.pipe(switchMap((user)=>{
      if(user){
        return this.db.collection("users").doc(user.uid).valueChanges()
      }
      return of(null);
    })
    );
   }
  
  login(usuario: string, password: string) {
    //retorna promesa del usuario.
    return new Promise((resolve, rejected) => {
      //Logueo de usuario con email y password 
      this.AFauth.signInWithEmailAndPassword(usuario, password).then(user => {
        //Verificacion de cuenta verificada por email.
        this.AFauth.onAuthStateChanged(function (userv) {
          var emailVerificado = userv.emailVerified;
          if (emailVerificado == true) {
            resolve(user)
          } else {
            console.log("Email no verificado ");
          }
        })
      }).catch(err => rejected(err));
    })
  }
  obtenerDatos(uid){
    return this.db.collection('users').doc(uid).snapshotChanges();
  }
  obtenerUsua(uid){
    return this.db.collection('users').doc(uid).get();
  }
  
  getUsers(){
    return this.db.collection('users').snapshotChanges().pipe(map(rooms =>{
      return rooms.map(a =>{
        const data: user =a.payload.doc.data() as user;
        data.uid= a.payload.doc.id;
        return data;
      })
    }));
  }
  
}
