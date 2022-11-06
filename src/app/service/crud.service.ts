import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient, private fireStore:AngularFirestore) { }

  read_student(){
    return this.fireStore.collection('estudiantes').snapshotChanges();
  }
}
