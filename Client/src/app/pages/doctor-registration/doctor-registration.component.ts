import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/service/service.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss'],
})
export class DoctorRegistrationComponent implements OnInit {
  DoctorForm: FormGroup;
  DocAuthUID: any;

  constructor(
    private Route: Router,
    private _FormBuilder: FormBuilder,
    private _Service: Service
  ) {}

  ngOnInit() {
    this.DoctorForm = this._FormBuilder.group({
      gender: 'Gender',
      user_name: '',
      full_name: '',
      phone: '',
      email: '',
      password: '',
      cpassword: '',
      role: 'Doctor',
    });
  }

  async Register() {
    (await this._Service.RegisterDoctor(this.DoctorForm.value)).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
