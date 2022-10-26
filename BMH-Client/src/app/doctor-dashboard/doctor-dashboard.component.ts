import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.scss'],
})
export class DoctorDashboardComponent implements OnInit {
  PageTitle = 'MedImpact | doctor';
  constructor(private _titleService: Title) {}
  ngOnInit(): void {
    this._titleService.setTitle(this.PageTitle);
  }

  SideBar() {
    const Close = document.getElementById('sb-nav-fixed');
    Close!.classList.toggle('sb-sidenav-toggled');
  }
}
