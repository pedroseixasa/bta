import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { StudyComponent } from './study/study.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { MobileComponent } from './mobile/mobile.component';
import { QaComponent } from './qa/qa.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarPerguntaComponent } from './criar-pergunta/criar-pergunta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { LoginComponent } from './login/login.component';


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
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'study', component: StudyComponent },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'frontend', component: FrontendComponent },
      { path: 'backend', component: BackendComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'qa', component: QaComponent },
      { path: 'perguntas', component: PerguntasComponent },
      { path: 'criar-pergunta', component: CriarPerguntaComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
