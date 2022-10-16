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
  }

  BookAppointment(DoctorDetails: any) {
    let IsAuthenticated: boolean = this._AuthService.GetLocalAuthToken();

    if (!IsAuthenticated) {
      alert('Please Login');
    } else {
      console.log(DoctorDetails);
    }
  }
}
