export interface User {
    //variables a utilizar
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
