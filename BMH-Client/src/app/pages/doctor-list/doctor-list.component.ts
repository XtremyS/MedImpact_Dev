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
      this.DocArray = res.data;

      // console.log(res.data);
    });
  }
}
