import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Acudiente } from '../interface/acudiente';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuarios: Acudiente[] = [];

  cedula: string = "";
  contrasena: string = "";

  students:any;

  constructor(private router: Router, private crudService: CrudService) { }

  ngOnInit(){

    this.crudService.read_student().subscribe(data =>{
      this.students=data.map(e=>{
        return{
          id:e.payload.doc.id,
          data:e.payload.doc.data()
        };
      })
    })
  }
  /*
    validate() {
      this.crudService.validate_user(this.usuario, this.password).then(usuarios => {
        console.log(usuarios);
        if (usuarios['rol'] != '') {
          this.redirigir(usuarios['name'], usuarios['rol']);
        } else {
          window.alert('Las credenciales son incorrectas, intente nuevamente.');
        }
      });
    }
  */
  validate() {
    this.crudService.validate_user(this.cedula, this.contrasena).then(usuarios => {
      console.log(usuarios);
      if (usuarios['cedula'] != '') {
        this.redirigir(usuarios['cedula'], usuarios['contrasena']);
      } else {
        window.alert('Las credenciales son incorrectas, intente nuevamente.');
      }
    });
  }

  redirigir(cedula: string, contrasena: string) {
    this.router.navigate(['acudiente', cedula, contrasena]);
  }

  onClick() {
    this.router.navigate(['register']);
  }

}
