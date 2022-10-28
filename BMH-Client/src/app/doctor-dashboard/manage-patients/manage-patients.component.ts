import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AllPurposeService } from 'src/services/allpurpose.service';
import { AuthService } from 'src/services/auth.service';
import { ModalService } from 'src/services/modal.service';
import { Service } from 'src/services/service.service';

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.component.html',
  styleUrls: ['./manage-patients.component.scss'],
})
export class ManagePatientsComponent implements OnInit {
  PageTitle = 'MedImpact | Admin Manage Patients';
  AppointmentsArray: any;
  constructor(
    private _Service: Service,
    private _AuthService: AuthService,
    private _ModalService: ModalService,
    private _RouterService: Router,
    private _titleService: Title,
    private _AllPurposeService: AllPurposeService
  ) {}

  ngOnInit(): void {
    //* Setting Page Title Dynamically
    this._titleService.setTitle(this.PageTitle);

    //* Appo
    this._Service.GetAppointmentData().subscribe(async (res: any) => {
      this.AppointmentsArray = res.body.appointments;
      console.log(this.AppointmentsArray);
    });
  }
}
