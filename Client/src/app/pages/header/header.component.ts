import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Service } from 'src/service/service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  IsLoggedIn = false;
  UserDetails = new Object();
  LoginForm = new FormGroup({});
  IsDashboardLink = 'testing doc link dashboard';
  IsDashboardName = 'Your Dashboard';

  constructor(private _FormBuilder: FormBuilder, private _Service: Service) {
    this.LoginForm = this._FormBuilder.group({
      doc_login: '',
      patient_login: '',
      lab_login: '',
      login_email: '',
      login_password: '',
    });
  }
  ngOnInit() {}

  async Login() {
    if (this.LoginForm.value.doc_login == 1) {
      (await this._Service.DoctorLogin(this.LoginForm.value)).subscribe(
        (data) => {
          this.IsLoggedIn = true;
          this.UserDetails = data;
          console.log(data);
        }
      );
    } else if (this.LoginForm.value.patient_login == 2) {
      (await this._Service.PatientLogin(this.LoginForm.value)).subscribe(
        (data) => {
          console.log(data);
        }
      );
    } else if (this.LoginForm.value.lab_login == 3) {
      (await this._Service.LabLogin(this.LoginForm.value)).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
