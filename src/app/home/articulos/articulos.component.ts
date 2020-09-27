import { Component, OnInit } from '@angular/core';
import { TaskI } from 'src/app/models/task.interface';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: TaskI[];
  textoBuscar: String = '';
  fecha: any;
  filtroAr = "";

  articulo: TaskI = {
    id: '',
    titulo: '',
    descripcion: '',
    img: '', 
    telefono: '',
    costo: '',
    userId: '',
  }
  
  constructor(private articuloService: ArticulosService) { }

  ngOnInit(): void {
    this.articuloService.getArticulos().subscribe(res=> {
      this.articulos = res;
      console.log(this.articulos);
    });
    this.fecha = new Date();
  }

  eliminarArticulo(){
    console.log("si entro joven");
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
    console.log(event);
    console.log(this.textoBuscar);
  }

}
