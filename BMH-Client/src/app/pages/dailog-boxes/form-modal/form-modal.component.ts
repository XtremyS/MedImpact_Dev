import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  AppointmentsForm = new FormGroup({});
  constructor(private _FormBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.AppointmentsForm = this._FormBuilder.group({
      patients_name: this.AppointmentsForm.value.patients_name,
      patients_age: this.AppointmentsForm.value.patients_age,
      patients_phone: this.AppointmentsForm.value.patients_phone,
      visting_reason: this.AppointmentsForm.value.visting_reason,
      appointment_date: this.AppointmentsForm.value.appointment_date,
    });
  }
  SubmitForm() {
    console.log(this.AppointmentsForm.value);
  }
}
