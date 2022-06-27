import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamepageIosComponent } from './examepage-ios.component';

describe('ExamepageIosComponent', () => {
  let component: ExamepageIosComponent;
  let fixture: ComponentFixture<ExamepageIosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamepageIosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamepageIosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
