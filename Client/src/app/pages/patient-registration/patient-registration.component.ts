import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/service/service.service';
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.scss'],
})
export class PatientRegistrationComponent implements OnInit {
  PatientsForm = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private _Service: Service
  ) {}

  ngOnInit() {
    this.PatientsForm = this.fb.group({
      gender: 'Gender',
      user_name: '',
      full_name: '',
      phone: '',
      email: '',
      password: '',
      cpassword: '',
      role: 'Patient',
    });
  }

  async Register() {
    (await this._Service.RegisterPatient(this.PatientsForm.value)).subscribe(
      (data) => {
        console.log(data);
      }
    );
  }
}
