import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsqueceuPasswordComponent } from './esqueceu-password.component';

describe('EsqueceuPasswordComponent', () => {
  let component: EsqueceuPasswordComponent;
  let fixture: ComponentFixture<EsqueceuPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsqueceuPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsqueceuPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
