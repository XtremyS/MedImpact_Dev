import { Component, OnInit } from '@angular/core';

import { HtmlParser, XmlParser } from '@angular/compiler';

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss'],
})
export class HospitalsComponent implements OnInit {
  ngOnInit() {}
}
