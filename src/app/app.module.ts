import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { StudyComponent } from './views/study/study.component';
import { DocumentationComponent } from './views/documentation/documentation.component';
import { FrontendComponent } from './views/frontend/frontend.component';
import { BackendComponent } from './views/backend/backend.component';
import { MobileComponent } from './views/mobile/mobile.component';
import { QaComponent } from './views/qa/qa.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CriarPerguntaComponent } from './views/criar-pergunta/criar-pergunta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerguntasComponent } from './views/perguntas/perguntas.component';
import { LoginComponent } from './views/login/login.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { RegistoComponent } from './views/registo/registo.component';
import { EsqueceuPasswordComponent } from './views/esqueceu-password/esqueceu-password.component';
import { PerguntasService } from './services/perguntas.service';
import { AreaService } from './services/area.service';
import { CalculadoraService } from './services/calculadora.service';
import { CalculadoraComponent } from './calculadora/calculadora.component';



@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    DocumentationComponent,
    FrontendComponent,
    BackendComponent,
    MobileComponent,
    QaComponent,
    HomeComponent,
    PerguntasComponent,
    CriarPerguntaComponent,
    PerguntasComponent,
    LoginComponent,
    DefaultLayoutComponent,
    LoginLayoutComponent,
    RegistoComponent,
    EsqueceuPasswordComponent,
    CalculadoraComponent,



  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  providers: [AreaService, PerguntasService, CalculadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
