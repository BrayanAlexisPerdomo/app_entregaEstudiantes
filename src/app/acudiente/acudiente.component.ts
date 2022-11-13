import { Component, OnInit } from '@angular/core';

import { CrudService } from '../service/crud.service';

import { Estudiante } from '../interface/estudiante';

import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-acudiente',
  templateUrl: './acudiente.component.html',
  styleUrls: ['./acudiente.component.css']
})
export class AcudienteComponent implements OnInit {
  title = 'crud2';

  estudiante: Estudiante[] = [];

  cedula: string = "";
  contrasena: string = "";

  nombre: string = "";
  apellido: string = "";
  seccion: string = "";
  entregar: string = "false";
  students: any;

  constructor(private router: Router, private route: ActivatedRoute, private crudService: CrudService) { }

  ngOnInit() {
    this.cedula = this.route.snapshot.params['cedula'];
    this.contrasena = this.route.snapshot.params['contrasena'];

    this.crudService.read_student().subscribe(data => {
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          data: e.payload.doc.data()
        };
      })
    })
  }

  salir() {
    this.router.navigate(['login']);
  }

  createRecord() {
    let record = {
      nombre: this.nombre,
      apellido: this.apellido,
      seccion: this.seccion
    };
    this.crudService.create_new_student(record).then(resp => {
      this.nombre = "";
      this.apellido = "";
      this.seccion = "";
      this.entregar = "";
      console.log(resp);
    }).catch(error => {
      console.log(error);
    });
  }

  removeRecord(id: string) {
    this.crudService.delete_student(id);
  }
  /*
  updateRecord(id: any) {
    let record = {
      Name: this.studentName,
      Age: this.studentAge,
      Address: this.studentAddress
    };
    this.crudService.update_student(id, record).then(resp => {
      this.studentName = "";
      this.studentAge = 0;
      this.studentAddress = "";
      console.log(resp);
    }).catch(error => {
      console.log(error);
    });
  }*/
}
