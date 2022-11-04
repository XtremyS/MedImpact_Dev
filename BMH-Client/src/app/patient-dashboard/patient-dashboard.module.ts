import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardRoutingModule } from './patient-dashboard-routing.module';
import { PatientDashboardComponent } from './patient-dashboard.component';
import { PatientDashboardHomeComponent } from './patient-dashboard-home/patient-dashboard-home.component';
import { YourAppointmentsComponent } from './your-appointments/your-appointments.component';

@NgModule({
  declarations: [PatientDashboardComponent, PatientDashboardHomeComponent, YourAppointmentsComponent],
  imports: [CommonModule, DoctorDashboardRoutingModule],
})
export class PatientDashboardModule {
  constructor() {}
}
