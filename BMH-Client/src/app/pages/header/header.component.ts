import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from 'src/services/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  radioItems = ['Doctor', 'Patient', 'Lab', 'Pharmacy'];
  model = { option: '' };

  LoginForm = new FormGroup({});
  IsLoggedIn = false;

  constructor(private _FormBuilder: FormBuilder, private _Service: Service) {
    this.LoginForm = this._FormBuilder.group({
      login_email: '',
      login_password: '',
    });
  }
  ngOnInit() {}

  async Login() {
    if (this.model.option == 'Doctor') {
      this._Service.DoctorLogin(this.LoginForm.value).subscribe((data) => {
        if (data) {
          this.IsLoggedIn = true;
        }
        console.log(data);
      });
      this.LoginForm.patchValue({
        login_email: '',
        login_password: '',
      });
    } else if (this.model.option == 'Patient') {
      this._Service.PatientLogin(this.LoginForm.value).subscribe((data) => {
        if (data) {
          this.IsLoggedIn = true;
        }
        console.log(data);
      });
      this.LoginForm.patchValue({
        login_email: '',
        login_password: '',
      });
    } else if (this.model.option == 'Lab') {
      this._Service.LabLogin(this.LoginForm.value).subscribe((data) => {
        if (data) {
          this.IsLoggedIn = true;
        }
        console.log(data);
      });
      this.LoginForm.patchValue({
        login_email: '',
        login_password: '',
      });
    } else if (this.model.option == 'Pharmacy') {
      this._Service.PharmacyLogin(this.LoginForm.value).subscribe((data) => {
        if (data) {
          this.IsLoggedIn = true;
        }
        console.log(data);
      });
      this.LoginForm.patchValue({
        login_email: '',
        login_password: '',
      });
      console.log(this.LoginForm.value);
    }
    console.log(this.model);
  }
  Logout() {
    this._Service.LogOut(this.LoginForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
