import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentViewDetailsComponent } from './appointment-view-details.component';

describe('AppointmentViewDetailsComponent', () => {
  let component: AppointmentViewDetailsComponent;
  let fixture: ComponentFixture<AppointmentViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
