import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { ExamLayoutComponent } from './layouts/exam-layout/exam-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

import { BackendComponent } from './views/backend/backend.component';
import { CriarPerguntaComponent } from './views/criar-pergunta/criar-pergunta.component';
import { DocumentationComponent } from './views/documentation/documentation.component';
import { EsqueceuPasswordComponent } from './views/esqueceu-password/esqueceu-password.component';
import { ExamepageComponent } from './views/examepage-android/examepage.component';
import { ExamepageBackendComponent } from './views/examepage-backend/examepage-backend.component';
import { ExamepageFrontendComponent } from './views/examepage-frontend/examepage-frontend.component';
import { ExamepageIosComponent } from './views/examepage-ios/examepage-ios.component';
import { ExamepageQaComponent } from './views/examepage-qa/examepage-qa.component';
import { FrontendComponent } from './views/frontend/frontend.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MobileComponent } from './views/mobile/mobile.component';
import { PerguntasComponent } from './views/perguntas/perguntas.component';
import { QaComponent } from './views/qa/qa.component';
import { RegistoComponent } from './views/registo/registo.component';
import { StudyComponent } from './views/study/study.component';

const routes: Routes = [
 
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'study', component: StudyComponent },
      { path: 'documentation', component: DocumentationComponent },
      { path: 'frontend', component: FrontendComponent },
      { path: 'backend', component: BackendComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'qa', component: QaComponent },
      { path: 'perguntas', component: PerguntasComponent },
      { path: 'criar-pergunta', component: CriarPerguntaComponent },
      { path: 'calculadora', component: CalculadoraComponent },
          ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registo', component: RegistoComponent },
      { path: 'esqueceu-password', component: EsqueceuPasswordComponent },
    ]
  },
  {
    path: '',
    component: ExamLayoutComponent,
    children: [
      { path: 'examepage-android', component: ExamepageComponent }, 
      { path: 'examepage-ios', component: ExamepageIosComponent },
      { path: 'examepage-frontend', component: ExamepageFrontendComponent },
      { path: 'examepage-backend', component: ExamepageBackendComponent },
      { path: 'examepage-qa', component: ExamepageQaComponent },
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
