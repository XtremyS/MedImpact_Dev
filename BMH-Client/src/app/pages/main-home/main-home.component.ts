import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss'],
})
export class MainHomeComponent implements OnInit {
  PageTitle = 'Book My Health | Home';

  constructor(private _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(this.PageTitle);
  }
}
