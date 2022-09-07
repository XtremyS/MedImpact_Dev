import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInvoiceComponent } from './patient-invoice.component';

describe('PatientInvoiceComponent', () => {
  let component: PatientInvoiceComponent;
  let fixture: ComponentFixture<PatientInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
