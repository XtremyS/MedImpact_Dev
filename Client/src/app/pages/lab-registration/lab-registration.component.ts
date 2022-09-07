import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from 'src/service/service.service';

@Component({
  selector: 'app-lab-registration',
  templateUrl: './lab-registration.component.html',
  styleUrls: ['./lab-registration.component.scss'],
})
export class LabRegistrationComponent implements OnInit {
  LabForm: FormGroup;
  LabAuthUID: any;

  constructor(
    private Route: Router,
    private _FormBuilder: FormBuilder,
    private _Service: Service
  ) {}

  ngOnInit() {
    this.LabForm = this._FormBuilder.group({
      lab_name: '',
      lab_type: 'Lab',
      phone: '',
      email: '',
      lab_password: '',
      lab_cpassword: '',
      country: '',
      city: '',
      state: '',
      address: '',
    });
  }
  async Register() {
    (await this._Service.RegisterLabs(this.LabForm.value)).subscribe((data) => {
      console.log(data);
    });
  }
}
