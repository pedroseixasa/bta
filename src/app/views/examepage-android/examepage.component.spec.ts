import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamepageComponent } from './examepage.component';

describe('ExamepageComponent', () => {
  let component: ExamepageComponent;
  let fixture: ComponentFixture<ExamepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
