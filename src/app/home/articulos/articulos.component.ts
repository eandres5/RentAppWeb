import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskI } from 'src/app/models/task.interface';
import { ArticulosService } from 'src/app/services/articulos.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  articulos: TaskI[];
  textoBuscar: String = '';
  fecha: any;

  articulo: TaskI = {
    id: '',
    titulo: '',
    descripcion: '',
    img: '', 
    telefono: '',
    costo: '',
    userId: '',
  }
  displayedColumns: string[] = ['Publicacion', 'Datos', 'Accion'];
  listData: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private articuloService: ArticulosService) { }

  ngOnInit(): void {
    this.articuloService.getArticulos().subscribe(res=> {
      this.articulos = res;
      console.log(this.articulos);
      this.listData = new MatTableDataSource(this.articulos);
      this.listData.paginator = this.paginator;
    });
    this.fecha = new Date();
  }

  eliminarArticulo(){
    console.log("si entro joven");
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.listData.filter = filterValue;
  }

}
