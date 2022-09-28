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
  ImgFormData = new FormData();
  Images: any;
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
      img: '',
    });
  }

  GetImg(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.Images = file;
      console.log(this.Images);
    }
  }
  async Register() {
    this.ImgFormData.append('img', this.Images);
    this._Service.RegisterPatient(this.PatientForm.value).subscribe((data) => {
      console.log(data);
    });
    this._Service.FileUpload(this.ImgFormData).subscribe((data) => {
      console.log(data);
    });
  }
}
