import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss'],
})
export class DoctorDetailsComponent implements OnInit {
  DoctorName = 'Test Doctor';
  PageTitle = 'Book My Health | ';

  constructor(private _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(this.PageTitle + `${this.DoctorName}`);
  }
}
