import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColegioComponent } from './colegio/colegio.component';
import { AcudienteComponent } from './acudiente/acudiente.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { CrudService } from './service/crud.service';
import { environment } from 'src/environments/environment';



const appRoutes: Routes = [

  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acudiente/:cedula/:contrasena', component: AcudienteComponent },
  { path: 'home', component: ColegioComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColegioComponent,
    AcudienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent, ColegioComponent, LoginComponent]
})
export class AppModule { }
