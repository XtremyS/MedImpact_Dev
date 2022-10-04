import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Service } from 'src/services/service.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.scss'],
})
export class DoctorRegistrationComponent implements OnInit {
  DoctorForm = new FormGroup({});
  PageTitle = 'MedImpact | Register Doctor';
  ImgFormData = new FormData();
  Images: any;

  //* EDUCATION FIELD INPUT VARIABLES
  @ViewChild('EducationInput') EducationInput: ElementRef<HTMLInputElement>;
  separatorKeysCodesEducation: number[] = [ENTER, COMMA];
  EducationFormControl = new FormControl('');
  FilterdEducationArray: Observable<string[]>;
  EducationValue: string[] = [];
  EducationSuggestionArray: string[] = [
    'MBBS',
    'TTBPS',
    'IMBS',
    'IIMBS',
    'IIIT',
  ];

  //* SPECIALITY FIELD INPUT VARIABLES
  @ViewChild('SpecialityInput') SpecialityInput: ElementRef<HTMLInputElement>;
  separatorKeysCodesSpeciality: number[] = [ENTER, COMMA];
  SpecialityFormControl = new FormControl('');
  FilterdSpecialityArray: Observable<string[]>;
  SpecialityValue: string[] = [];
  SpecialitySuggestionArray: string[] = [
    'NERROSURGOEN',
    'DENTIST',
    'CHARDIOLOSITS',
    'EYE',
    'ORTHOD',
  ];

  constructor(
    private Route: Router,
    private _FormBuilder: FormBuilder,
    private _Service: Service,
    private _titleService: Title
  ) {
    //* EDUCATION FIELD FILTER LOGIC
    this.FilterdEducationArray = this.EducationFormControl.valueChanges.pipe(
      startWith(null),
      map((Data: string | null) =>
        Data
          ? this._FilterEducation(Data)
          : this.EducationSuggestionArray.slice()
      )
    );

    //* SPECIALITY FIELD FILTER LOGIC
    this.FilterdSpecialityArray = this.SpecialityFormControl.valueChanges.pipe(
      startWith(null),
      map((Data: string | null) =>
        Data
          ? this._FilterSpeciality(Data)
          : this.SpecialitySuggestionArray.slice()
      )
    );
  }

  //* EDUCATION FIELD FUNCTIONS
  AddEducation(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.EducationValue.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
    this.EducationFormControl.setValue(null);
  }

  RemoveEducation(fruit: string): void {
    const index = this.EducationValue.indexOf(fruit);

    if (index >= 0) {
      this.EducationValue.splice(index, 1);
    }
  }

  SelectedEducation(event: MatAutocompleteSelectedEvent): void {
    this.EducationValue.push(event.option.viewValue);
    this.EducationInput.nativeElement.value = '';
    this.EducationFormControl.setValue(null);
  }

  private _FilterEducation(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.EducationSuggestionArray.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }

  //* SPECIALITY FIELD FUNCTIONS
  AddSpeciality(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.SpecialityValue.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.SpecialityFormControl.setValue(null);
  }

  RemoveSpeciality(fruit: string): void {
    const index = this.SpecialityValue.indexOf(fruit);

    if (index >= 0) {
      this.SpecialityValue.splice(index, 1);
    }
  }

  SelectedSpeciality(event: MatAutocompleteSelectedEvent): void {
    this.SpecialityValue.push(event.option.viewValue);
    this.SpecialityInput.nativeElement.value = '';
    this.SpecialityFormControl.setValue(null);
  }

  private _FilterSpeciality(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.SpecialitySuggestionArray.filter((fruit) =>
      fruit.toLowerCase().includes(filterValue)
    );
  }
  ngOnInit() {
    this._titleService.setTitle(this.PageTitle);
    this.DoctorForm = this._FormBuilder.group({
      gender: 'Gender',
      full_name: '',
      phone: '',
      age: '',
      education: '',
      speciality: '',
      clinic_address: '',
      city: '',
      state: '',
      country: '',
      email: '',
      password: '',
      cpassword: '',
      role: 'Doctor',
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
    this.DoctorForm.patchValue({
      education: this.EducationValue,
      speciality: this.SpecialityValue,
    });

    this.ImgFormData.append('gender', this.DoctorForm.value.gender);
    this.ImgFormData.append('full_name', this.DoctorForm.value.full_name);
    this.ImgFormData.append('phone', this.DoctorForm.value.phone);
    this.ImgFormData.append('age', this.DoctorForm.value.age);
    this.ImgFormData.append('education', this.DoctorForm.value.education);
    this.ImgFormData.append('speciality', this.DoctorForm.value.speciality);
    this.ImgFormData.append(
      'clinic_address',
      this.DoctorForm.value.clinic_address
    );
    this.ImgFormData.append('city', this.DoctorForm.value.city);
    this.ImgFormData.append('state', this.DoctorForm.value.state);
    this.ImgFormData.append('country', this.DoctorForm.value.country);
    this.ImgFormData.append('email', this.DoctorForm.value.email);
    this.ImgFormData.append('password', this.DoctorForm.value.password);
    this.ImgFormData.append('cpassword', this.DoctorForm.value.cpassword);
    this.ImgFormData.append('img', this.Images);

    this._Service.RegisterDoctor(this.ImgFormData).subscribe((data) => {
      console.log(data);
    });
    // this._Service.FileUpload(this.ImgFormData).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
