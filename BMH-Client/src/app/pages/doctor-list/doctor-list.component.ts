import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/service.service';
import { AuthService } from 'src/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from '../dailog-boxes/form-modal/form-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  DocArray: any;
  PatientData: any;
  //* Alert Dialog Configuration
  DurationInSeconds = 5;

  constructor(
    private _Service: Service,
    private _AuthService: AuthService,
    public dialog: MatDialog,
    private _ModalService: ModalService
  ) {}

  ngOnInit(): void {
    //* Getting All Doctors Data From API
    this._Service.GetDocData().subscribe((res) => {
      this.DocArray = res.body.data;
    });
  }

  BookAppointment(DoctorDetails: any) {
    //* Auth Token Initializtion
    let IsAuthenticated: boolean = this._AuthService.GetLocalAuthToken();
    //* Checking Before Booking Appointment User IsAuthenticated Or Not
    if (!IsAuthenticated) {
      this._ModalService.OpentAlertDialog('Not_Authenticated');
    } else {
      console.log(DoctorDetails);
      this._Service.GetUserData().subscribe((res) => {
        console.log(res.body, 'RESPONSE OF USER DATA WHICH IS LOGGED IN');
      });
      this.openDialog();
    }
  }

  openDialog(): void {
    this.dialog.open(FormModalComponent, {});
  }
}
