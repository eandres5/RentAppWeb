import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { TaskI } from '../models/task.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  private articuloCollection: AngularFirestoreCollection<TaskI>;
  private articulos: Observable<TaskI[]>;

  constructor(private afs: AngularFirestore) {
    this.articuloCollection = afs.collection<TaskI>('articulos');
    this.articulos = this.articuloCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        });
      })
    );

  }


  getArticulos(): Observable<TaskI[]>{
    return this.articulos;
  }

  deleteArticulo(id: string): Promise<void>{
    return this.articuloCollection.doc(id).delete();
  }

}
