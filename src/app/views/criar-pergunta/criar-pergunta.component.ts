import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { now } from 'jquery';
import { Subscription } from 'rxjs';
import { BackendCategories, Category, FrontendCategories, MobileCategories, QACategories } from 'src/app/models/categories.model';
import { QuestionModel, QuestionType, Role, Status } from 'src/app/models/questions.model';
import { RoleService } from 'src/app/services/role.service';

import { v4 as id } from 'uuid';

import { Area } from '../../models/area.model';
import { Categoria } from "../../models/categoria.model";

@Component({
  selector: 'app-criar-pergunta',
  templateUrl: './criar-pergunta.component.html',
  styleUrls: ['./criar-pergunta.component.css'],
  // encapsulation: ViewEncapsulation.
})
export class CriarPerguntaComponent implements OnDestroy, DoCheck {
  // @viewChild @viewChildreen
  @ViewChild('inputRespostaCorreta') someService!: ElementRef;

  QuestionType = QuestionType;

  selected: any;
  questionForm!: FormGroup;
  wasValidated = false;
  categories: Category[] = [];
  roles: Role[] = [];

  private roleSub!: Subscription;

  constructor(
    private roleService: RoleService,
    private http: HttpClient,
    private router: Router
    ) {
    this.setupForm();
    this.roles = this.roleService.getRoles();
  }

  ngDoCheck(): void {
    const alphabeth = Array.from(Array(26)).map((_, index) => index + 65).map(charCode => String.fromCharCode(charCode));
    this.answersArray.forEach((answer, index) => {
      answer.patchValue({
        code: alphabeth[index]
      })
    });
  }

  ngOnDestroy(): void {
    this.roleSub.unsubscribe();
  }

  onSubmit() {
    if (this.questionForm.invalid) {
      this.questionForm.markAllAsTouched();
      this.questionForm.updateValueAndValidity();
      return;
    }

    // enviar dados
    this.http.post('https://btapp-b6ea9-default-rtdb.europe-west1.firebasedatabase.app/perguntas.json', this.convertToQuestion(this.questionForm)).subscribe(this.responseData.bind(this));

    this.wasValidated = true;
  }

  private responseData(responseData: any) {
    this.router.navigate(['/perguntas']);
  }

  private convertToQuestion(form: FormGroup): QuestionModel {
    return ({
      id: id(),
      type: form.get('type').value,
      category: form.get('category').value,
      role: form.get('role').value,
      question: form.get('question').value,
      answers: form.get('answers').value,
      correctAnswers: form.get('correctAnswers').value,
      userAnswer: null,
      status: Status.ACCEPTED,
      creationDate: new Date(),
      createdBy: 'teste123',
      ...(form.get('snippet').value && { snippet: form.get('snippet').value })

    })
  }



  private setupForm(): void {
    this.questionForm = new FormGroup({
      type: new FormControl(QuestionType.SINGLE_CHOICE),
      role: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      question: new FormControl('', Validators.required),
      userAnswer: new FormControl(null),
      snippet: new FormControl(''),
      answers: new FormArray([
        this.generateAnswer(),
        this.generateAnswer()
      ]),
      correctAnswers: new FormControl('', Validators.required)
      
    });

    this.roleSub = this.questionForm.controls['role'].valueChanges.subscribe((role: string) => {
        switch(role) {
          case Role.FRONTEND:
            return this.categories = Object.values(FrontendCategories);
          case Role.BACKEND:
            return this.categories = Object.values(BackendCategories);
          case Role.MOBILE:
            return this.categories = Object.values(MobileCategories);
          case Role.QA:
            return this.categories = Object.values(QACategories);
          default:
            return this.categories = [];
        }
    });
  }

  get answersArray(): FormGroup[] {
    return (this.questionForm.get('answers') as FormArray).controls as FormGroup[];
  }

  get completeAnswers()  {
    return this.answersArray.filter(group => {
      return group.get('code').value && group.get('text').value;
    })
  }

  onAddAnswer() {
    const answersArray = this.questionForm.get('answers') as FormArray;
    answersArray.push(this.generateAnswer());
  }

  onDeleteAnswer(answerToDelete: number) {
    const answersArray = this.questionForm.get('answers') as FormArray;
    answersArray.removeAt(answerToDelete);
  }

  private generateAnswer() {
    return new FormGroup({
      code: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required)
    });
  }

  onCheckboxChange(matCheckboxChange: MatCheckboxChange) {
    const correctAnswersControl = this.questionForm.get('correctAnswers');
    let correctAnswer = Array.isArray(correctAnswersControl.value) && correctAnswersControl.value || [];
    if (matCheckboxChange.checked) {
      correctAnswer.push(matCheckboxChange.source.value);
    } else {
      correctAnswer = correctAnswer.filter(answer => answer !== matCheckboxChange.source.value);
    }
    correctAnswersControl.setValue(correctAnswer);
    console.log(correctAnswersControl.value)
  }

  
}



