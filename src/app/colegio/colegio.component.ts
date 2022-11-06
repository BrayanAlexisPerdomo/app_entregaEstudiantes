import { Component, OnInit } from '@angular/core';

import { CrudService } from '../service/crud.service';

import { Estudiante } from '../interface/estudiante';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colegio',
  templateUrl: './colegio.component.html',
  styleUrls: ['./colegio.component.css']
})
export class ColegioComponent implements OnInit {

  title = 'Home';

  estudiantes:Estudiante[]=[];

  est_nombre:string="";
  est_apellido:string="";
  est_seccion:string="";
  est_entrega:boolean | undefined;
  
  lista_estudiantes:any;

  constructor(private router:Router,private route:ActivatedRoute,private crudService:CrudService) { }

  ngOnInit(){
    this.crudService.read_student().subscribe(data =>{
      this.lista_estudiantes=data.map(e=>{
        return{
          id:e.payload.doc.id,
          data:e.payload.doc.data()
        };
      })
    })
  }

}
