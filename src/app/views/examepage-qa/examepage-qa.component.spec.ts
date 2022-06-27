import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamepageQaComponent } from './examepage-qa.component';

describe('ExamepageQaComponent', () => {
  let component: ExamepageQaComponent;
  let fixture: ComponentFixture<ExamepageQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamepageQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamepageQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
