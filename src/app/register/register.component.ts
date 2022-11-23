import { Component, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  apellido:String="";
  nombre:String="";
  cedula:String="";
  celular:String="";
  correo:String="";
  contrasena:String="";
  parents:any;

  constructor(
    private crudService:CrudService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createRecord(){
    let record={
    apellido:this.apellido,
    nombre:this.nombre,
    cedula:this.cedula,
    celular:this.celular,
    correo:this.correo,
    contrasena:this.contrasena
    
    };

    this.crudService.create_New_Parent(record).then(resp=>{
      this.apellido="";
      this.nombre="";
      this.cedula="";
      this.celular="";
      this.correo="";
      this.contrasena="";
      console.log(resp);
    }).catch(error=>{
      console.log(error);
    })


  }

  
  redirigir() {
    this.router.navigate(['login']);
  }

}
