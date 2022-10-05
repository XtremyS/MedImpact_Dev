import { Component, OnInit } from '@angular/core';
import { Service } from 'src/services/service.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss'],
})
export class DoctorListComponent implements OnInit {
  DocArray: any;

  constructor(private _Service: Service) {}

  ngOnInit(): void {
    this._Service.GetDocData().subscribe((res) => {
      this.DocArray = res.body.data;
    });
  }

  BookAppointment(DoctorDetails: any) {
    let DoctorObject = {
      _id: DoctorDetails._id,
      patients_name: 'TESTING',
      patients_age: 23,
      visting_reason: 'cancer',
    };
    this._Service.BookDocAppointment(DoctorObject).subscribe((res) => {
      console.log('RES BOOK APPINT', res);
    });
  }
}
