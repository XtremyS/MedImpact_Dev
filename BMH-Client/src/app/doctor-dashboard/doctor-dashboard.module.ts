import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { DoctorDashboardHomeComponent } from './doctor-dashboard-home/doctor-dashboard-home.component';
import { ManagePatientsComponent } from './manage-patients/manage-patients.component';

@NgModule({
  declarations: [
    DoctorDashboardComponent,
    DoctorDashboardHomeComponent,
    ManagePatientsComponent,
  ],
  imports: [CommonModule, DoctorDashboardRoutingModule],
})
export class DoctorDashboardModule {
  constructor() {}
}
