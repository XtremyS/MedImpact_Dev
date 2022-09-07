import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { HtmlParser, XmlParser } from '@angular/compiler';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  ngOnInit() {}
}
