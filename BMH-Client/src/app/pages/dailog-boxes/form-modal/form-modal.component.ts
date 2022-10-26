import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Service } from 'src/services/service.service';
import { AllPurposeService } from 'src/services/allpurpose.service';
import { ModalService } from 'src/services/modal.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss'],
})
export class FormModalComponent implements OnInit {
  AppointmentsForm = new FormGroup({});
  DoctorId: any;
  constructor(
    private _FormBuilder: FormBuilder,
    private _Service: Service,
    private _AllPurposeService: AllPurposeService,
    private _ModalService: ModalService
  ) {}
  ngOnInit(): void {
    //* Getting Doctor Id From DocList Component On Click Of Book Now BTN
    this._AllPurposeService.DoctorsDetailsSubject.subscribe(async (data) => {
      this.DoctorId = data._id;
    });

    //* Sending All Form Data To Backend
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
    this._ModalService.CloseDialog();
    // this._Service
    //   .BookDocAppointment(this.AppointmentsForm.value)
    //   .subscribe(async (data) => {
    //     if (data.status == 201) {
    //       this._ModalService.OpenAlertDialog('booking_request_success');
    //     }
    //     console.log(data, 'RESPONSE DATA OF MODAL');
    //   });
  }
}
