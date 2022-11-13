import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { collection, query, where, getDocs } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient, private fireStore: AngularFirestore) { }

  read_student() {
    return this.fireStore.collection('estudiantes').snapshotChanges();
  }

  create_new_student(record: {}) {
    return this.fireStore.collection('estudiantes').add(record);
  }
  delete_student(id: String) {
    return this.fireStore.doc('estudiantes/' + id).delete();
  }

  async validate_user(cedula: string, contrasena: string) {

    let user_data = { 'cedula': '', 'contrasena': '' };

    const users = collection(this.fireStore.firestore, "acudientes");
    const user = query(users, where("cedula", "==", cedula), where("contrasena", "==", contrasena));

    const querySnapshot = await getDocs(user);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      user_data.cedula = doc.data()['cedula'];
      user_data.contrasena = doc.data()['contrasena'];
    });
    return user_data;
  }
}
