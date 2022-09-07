import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAppointmentComponent } from './your-appointment.component';

describe('YourAppointmentComponent', () => {
  let component: YourAppointmentComponent;
  let fixture: ComponentFixture<YourAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
