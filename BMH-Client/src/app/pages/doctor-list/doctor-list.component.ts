import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/service.service';
import { AuthService } from 'src/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
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
  DurationInSeconds = 30000;
  constructor(
    private _Service: Service,
    private _AuthService: AuthService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //* GETTING DOCTOR DATA FROM API
    this._Service.GetDocData().subscribe((res) => {
      this.DocArray = res.body.data;
    });
  }

  BookAppointment(DoctorDetails: any) {
    let IsAuthenticated: boolean = this._AuthService.GetLocalAuthToken();

    if (!IsAuthenticated) {
      this.openSnackBar();
    } else {
      console.log(DoctorDetails);
    }
  }

  openSnackBar() {
    this._snackBar.openFromComponent(FormModalComponent, {
      duration: this.DurationInSeconds * 1000,
    });
  }
}
