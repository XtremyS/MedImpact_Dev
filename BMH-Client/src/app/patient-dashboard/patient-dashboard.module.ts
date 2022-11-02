import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardRoutingModule } from './patient-dashboard-routing.module';
import { PatientDashboardComponent } from './patient-dashboard.component';
import { PatientDashboardHomeComponent } from './patient-dashboard-home/patient-dashboard-home.component';

@NgModule({
  declarations: [PatientDashboardComponent, PatientDashboardHomeComponent],
  imports: [CommonModule, DoctorDashboardRoutingModule],
})
export class PatientDashboardModule {
  constructor() {}
}
