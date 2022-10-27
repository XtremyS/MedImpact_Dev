import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Service } from 'src/services/service.service';
import { AllPurposeService } from 'src/services/allpurpose.service';
import { ModalService } from 'src/services/modal.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  AppointmentsForm = new FormGroup({});
  DoctorId: any;
  LoggedInUserData: any;
  constructor(
    private _FormBuilder: FormBuilder,
    private _Service: Service,
    private _AllPurposeService: AllPurposeService,
    private _ModalService: ModalService,
    public FormDialogBox: MatDialogRef<FormModalComponent>
  ) {}
  ngOnInit(): void {
    this._Service.GetUserData().subscribe(async (res) => {
      if (res.status == 200) {
        this.LoggedInUserData = res.body;
        console.log(
          this.LoggedInUserData,
          'RESPONSE OF USER DATA WHICH IS LOGGED IN'
        );

        //* Patching The Api User Data Into Form
        this.AppointmentsForm.patchValue({
          patients_name: this.LoggedInUserData.full_name,
          patients_age: this.LoggedInUserData.age,
          patients_phone: this.LoggedInUserData.phone,
        });
      }
    });

    //* Getting Doctor Id From DocList Component On Click Of Book Now BTN
    this._AllPurposeService.DoctorsDetailsSubject.subscribe(async (data) => {
      this.DoctorId = data._id;
    });

    //* Input Data From Form
    this.AppointmentsForm = this._FormBuilder.group({
      _id: this.DoctorId,
      patients_name: this.AppointmentsForm.value.patients_name,
      patients_age: this.AppointmentsForm.value.patients_age,
      patients_phone: this.AppointmentsForm.value.patients_phone,
      visiting_reason: this.AppointmentsForm.value.visiting_reason,
      appointment_date: this.AppointmentsForm.value.appointment_date,
    });
  }
  SubmitForm() {
    this._Service
      .BookDocAppointment(this.AppointmentsForm.value)
      .subscribe(async (data) => {
        if (data.status == 201) {
          //* Opening Alert Modal WIth This Method
          this._ModalService.OpenAlertDialog('booking_request_success');
          //* Closing Form Dialog Box With This Method
          this.FormDialogBox.close();
        }
        console.log(data, 'RESPONSE DATA OF MODAL');
      });

    console.log(this.AppointmentsForm.value);
  }
}
