import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamepageFrontendComponent } from './examepage-frontend.component';

describe('ExamepageFrontendComponent', () => {
  let component: ExamepageFrontendComponent;
  let fixture: ComponentFixture<ExamepageFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamepageFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamepageFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
