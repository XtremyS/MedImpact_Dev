import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';
import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { DoctorDashboardHomeComponent } from './doctor-dashboard-home/doctor-dashboard-home.component';

@NgModule({
  declarations: [DoctorDashboardComponent, DoctorDashboardHomeComponent],
  imports: [CommonModule, DoctorDashboardRoutingModule],
})
export class DoctorDashboardModule {}
