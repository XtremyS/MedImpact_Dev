import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Service } from 'src/services/service.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent implements OnInit {
  PatientForm = new FormGroup({});

  PageTitle = 'Book My Health | Register Patient';

  constructor(
    private Route: Router,
    private _FormBuilder: FormBuilder,
    private _Service: Service,
    private _titleService: Title
  ) {}

  ngOnInit(): void {
    this._titleService.setTitle(this.PageTitle);
    this.PatientForm = this._FormBuilder.group({
      gender: 'Gender',
      full_name: '',
      phone: '',
      age: '',
      email: '',
      password: '',
      cpassword: '',
      role: 'Patient',
    });
  }
  async Register() {
    this._Service.RegisterPatient(this.PatientForm.value).subscribe((data) => {
      console.log(data);
    });
  }
}
