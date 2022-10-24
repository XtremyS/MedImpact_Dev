import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-alert-dialog-box',
  templateUrl: './alert-dialog-box.component.html',
  styleUrls: ['./alert-dialog-box.component.scss'],
})
export class AlertDialogBoxComponent implements OnInit {
  LoginSuccess: boolean = false;
  LoginFailure: boolean = false;
  Logout: boolean = false;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) {}
  ngOnInit(): void {
    if (this.data == 'Not_Authenticated') {
      this.LoginFailure = true;
    } else if (this.data == 'Authenticated') {
      this.LoginSuccess = true;
    } else if (this.data == 'Logout') {
      this.Logout = true;
    }

    console.log(this.data, 'Message From DoctorListComponent');
  }
}
