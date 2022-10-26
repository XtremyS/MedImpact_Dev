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

  //* Specialty FIELD INPUT VARIABLES
  @ViewChild('SpecialtyInput') SpecialtyInput: ElementRef<HTMLInputElement>;
  separatorKeysCodesSpecialty: number[] = [ENTER, COMMA];
  SpecialtyFormControl = new FormControl('');
  FilterdSpecialtyArray: Observable<string[]>;
  SpecialtyValue: string[] = [];
  SpecialtySuggestionArray: string[] = [
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
    this.FilterdSpecialtyArray = this.SpecialtyFormControl.valueChanges.pipe(
      startWith(null),
      map((Data: string | null) =>
        Data
          ? this._FilterSpecialty(Data)
          : this.SpecialtySuggestionArray.slice()
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

  //* Specialty FIELD FUNCTIONS
  AddSpecialty(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.SpecialtyValue.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.SpecialtyFormControl.setValue(null);
  }

  RemoveSpecialty(fruit: string): void {
    const index = this.SpecialtyValue.indexOf(fruit);

    if (index >= 0) {
      this.SpecialtyValue.splice(index, 1);
    }
  }

  SelectedSpecialty(event: MatAutocompleteSelectedEvent): void {
    this.SpecialtyValue.push(event.option.viewValue);
    this.SpecialtyInput.nativeElement.value = '';
    this.SpecialtyFormControl.setValue(null);
  }

  private _FilterSpecialty(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.SpecialtySuggestionArray.filter((fruit) =>
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
      specialty: '',
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
      specialty: this.SpecialtyValue,
    });

    this.ImgFormData.append('gender', this.DoctorForm.value.gender);
    this.ImgFormData.append('full_name', this.DoctorForm.value.full_name);
    this.ImgFormData.append('phone', this.DoctorForm.value.phone);
    this.ImgFormData.append('age', this.DoctorForm.value.age);
    this.ImgFormData.append('education', this.DoctorForm.value.education);
    this.ImgFormData.append('specialty', this.DoctorForm.value.Specialty);
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
  }
}
