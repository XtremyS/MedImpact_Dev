import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AllPurposeService } from 'src/services/allpurpose.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit, OnDestroy {
  DoctorName: any;
  PageTitle = 'MedImpact | ';
  DoctorDetails: any;
  DoctorDetailsLocalStorage: any;

  constructor(
    private _titleService: Title,
    private _ActivatedRouteService: ActivatedRoute,
    private _AllPurposeService: AllPurposeService
  ) {}

  ngOnInit() {
    //* Getting Doctor Name From Route Params
    this.DoctorName = this._ActivatedRouteService.snapshot.params;

    //* Setting Doctor Name In Page Title Dynamically
    this._titleService.setTitle(
      this.PageTitle + `${this.DoctorName.full_name}`
    );
    this._AllPurposeService.DoctorsDetailsSubject.subscribe(
      async (data: any) => {
        this.DoctorDetails = data;
      }
    );
    //* Setting Doctor Details From Subject In LocalStorage To Keep Data On Page Load
    this.DoctorDetailsLocalStorage = localStorage.setItem(
      'tdd',
      JSON.stringify(this.DoctorDetails)
    );
  }

  ngOnDestroy(): void {
    //* Unsubscribing DoctorsDetailsSubject OnDestroy
    this._AllPurposeService.DoctorsDetailsSubject.unsubscribe;
    localStorage.removeItem('tdd');
  }
}
