import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/service.service';
import { AuthService } from 'src/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { FormModalComponent } from '../dailog-boxes/form-modal/form-modal.component';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';

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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _Service: Service,
    private _AuthService: AuthService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
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

    //* Checking Before Booking Appointment IsAuthenticated Or Not
    if (!IsAuthenticated) {
      this.openSnackBar('testing');
    } else {
      console.log(DoctorDetails);
    }
  }

  //* Alert Snack Bar Function
  openSnackBar(Data: any) {
    this._snackBar.openFromComponent(FormModalComponent, {
      duration: this.DurationInSeconds * 1000,
      panelClass: ['Alert_SnackBar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
