import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/service.service';
import { AuthService } from 'src/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogBoxComponent } from '../dailog-boxes/alert-dialog-box/alert-dialog-box.component';
import { FormModalComponent } from '../dailog-boxes/form-modal/form-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    //* Checking Before Booking Appointment User IsAuthenticated Or Not
    if (!IsAuthenticated) {
      this.OpentAlertDialog('Not_Authenticated');
    } else {
      console.log(DoctorDetails);
      this._Service.GetUserData().subscribe((res) => {
        console.log(res.body, 'RESPONSE OF USER DATA WHICH IS LOGGED IN');
      });
      this.openDialog();
    }
  }

  //* Alert Snack Bar Function
  OpentAlertDialog(Message: string) {
    this._snackBar.openFromComponent(AlertDialogBoxComponent, {
      duration: this.DurationInSeconds * 1000,
      panelClass: ['Alert_SnackBar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
      data: Message,
    });
  }
  openDialog(): void {
    this.dialog.open(FormModalComponent, {});
  }
}
