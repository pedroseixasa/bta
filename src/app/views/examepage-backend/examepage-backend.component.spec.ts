import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamepageBackendComponent } from './examepage-backend.component';

describe('ExamepageBackendComponent', () => {
  let component: ExamepageBackendComponent;
  let fixture: ComponentFixture<ExamepageBackendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamepageBackendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamepageBackendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
