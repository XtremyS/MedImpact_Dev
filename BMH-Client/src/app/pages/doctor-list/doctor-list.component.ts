import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/service.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  DocArray: any;
  PatientData: any;

  constructor(private _Service: Service, private _AuthService: AuthService) {}

  ngOnInit(): void {
    //* GETTING DOCTOR DATA FROM API
    this._Service.GetDocData().subscribe((res) => {
      this.DocArray = res.body.data;
    });
    //* GETTING USER DATA FROM LOCAL STORAGE
    this.PatientData = this._AuthService.GetUserDataLocal();
    console.log(this.PatientData);
  }

  BookAppointment(DoctorDetails: any) {
    let DoctorObject = {
      _id: DoctorDetails._id,
      patients_name: this.PatientData.full_name,
      patients_age: this.PatientData.age,
      visting_reason: this.PatientData.visting_reason,
      patients_address: this.PatientData.address,
      patients_phone: this.PatientData.phone,
    };
    this._Service.BookDocAppointment(DoctorObject).subscribe((res) => {
      console.log('RES BOOK APPINT', res);
    });
  }
}
