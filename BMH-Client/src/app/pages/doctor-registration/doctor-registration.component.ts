import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Service } from 'src/services/service.service';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss'],
})
export class DoctorRegistrationComponent implements OnInit {
  DoctorForm = new FormGroup({});
  PageTitle = 'Book My Health | Register Doctor';

  constructor(
    private Route: Router,
    private _FormBuilder: FormBuilder,
    private _Service: Service,
    private _titleService: Title
  ) {}

  ngOnInit() {
    this._titleService.setTitle(this.PageTitle);
    this.DoctorForm = this._FormBuilder.group({
      gender: 'Gender',
      full_name: '',
      phone: '',
      age: '',
      email: '',
      password: '',
      cpassword: '',
      role: 'Doctor',
    });
  }
  async Register() {
    this._Service.RegisterDoctor(this.DoctorForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
