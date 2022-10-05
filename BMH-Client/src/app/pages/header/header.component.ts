import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Service } from 'src/services/service.service';
import { AuthService } from '../../../services/auth.service';

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
  ApiUserDetails: any;
  LocalStorageAuthToken = this._AuthService.GetLocalAuthToken();

  constructor(
    private _FormBuilder: FormBuilder,
    private _Service: Service,
    private _AuthService: AuthService
  ) {
    this.LoginForm = this._FormBuilder.group({
      login_email: '',
      login_password: '',
    });
  }
  ngOnInit() {
    if (this.LocalStorageAuthToken) {
      this.IsLoggedIn = true;
    }
  }

  async Login() {
    if (this.model.option == 'Doctor') {
      this._Service.DoctorLogin(this.LoginForm.value).subscribe((data) => {
        console.log(data.body.response);
        if (data.status == 200) {
          //* SETTING API RESPONSE FROM API IN GLOBAL VARIABLE
          this.ApiUserDetails = data.body.response;
          this.IsLoggedIn = true;
          //* GETTING LAST AUTH TOKEN OF USER FROM API AND SETTING IT IN LOCAL STORAGE
          let AuthToken =
            this.ApiUserDetails.tokens[this.ApiUserDetails.tokens.length - 1]
              .token;
          this._AuthService.SetLocalAuthToken(AuthToken);
        }
      });
      this.LoginForm.patchValue({
        login_email: '',
        login_password: '',
      });
    } else if (this.model.option == 'Patient') {
      this._Service.PatientLogin(this.LoginForm.value).subscribe((data) => {
        console.log(data.body.response);
        if (data.status == 200) {
          //* SETTING API RESPONSE FROM API IN GLOBAL VARIABLE
          this.ApiUserDetails = data.body.response;
          this.IsLoggedIn = true;
          //* GETTING LAST AUTH TOKEN OF USER FROM API AND SETTING IT IN LOCAL STORAGE
          let AuthToken =
            this.ApiUserDetails.tokens[this.ApiUserDetails.tokens.length - 1]
              .token;
          this._AuthService.SetLocalAuthToken(AuthToken);
        }
      });
      this.LoginForm.patchValue({
        login_email: '',
        login_password: '',
      });
    } else if (this.model.option == 'Lab') {
      this._Service.LabLogin(this.LoginForm.value).subscribe((data) => {
        console.log(data.body.response);
        if (data.status == 200) {
          //* SETTING API RESPONSE FROM API IN GLOBAL VARIABLE
          this.ApiUserDetails = data.body.response;
          this.IsLoggedIn = true;
          //* GETTING LAST AUTH TOKEN OF USER FROM API AND SETTING IT IN LOCAL STORAGE
          let AuthToken =
            this.ApiUserDetails.tokens[this.ApiUserDetails.tokens.length - 1]
              .token;
          this._AuthService.SetLocalAuthToken(AuthToken);
        }
      });
      this.LoginForm.patchValue({
        login_email: '',
        login_password: '',
      });
    } else if (this.model.option == 'Pharmacy') {
      this._Service.PharmacyLogin(this.LoginForm.value).subscribe((data) => {
        console.log(data.body.response);
        if (data.status == 200) {
          //* SETTING API RESPONSE FROM API IN GLOBAL VARIABLE
          this.ApiUserDetails = data.body.response;
          this.IsLoggedIn = true;
          //* GETTING LAST AUTH TOKEN OF USER FROM API AND SETTING IT IN LOCAL STORAGE
          let AuthToken =
            this.ApiUserDetails.tokens[this.ApiUserDetails.tokens.length - 1]
              .token;
          this._AuthService.SetLocalAuthToken(AuthToken);
        }
      });
      this.LoginForm.patchValue({
        login_email: '',
        login_password: '',
      });
      console.log(this.LoginForm.value);
    }
  }
  Logout() {
    this._Service.LogOut(this.LoginForm.value).subscribe((data) => {
      this.ApiUserDetails = data;
      console.log(data.message);
      if (data.message == 'User Logout Successfully!') {
        this.IsLoggedIn = false;
        this._AuthService.RemoveLocalAuthToken();
        location.reload();
      }
    });
  }
}
