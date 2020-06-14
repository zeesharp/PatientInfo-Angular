import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoEditComponent } from './patient-info-edit.component';

describe('PatientInfoEditComponent', () => {
  let component: PatientInfoEditComponent;
  let fixture: ComponentFixture<PatientInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
