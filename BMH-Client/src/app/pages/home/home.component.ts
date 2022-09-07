import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  PageTitle = 'Book My Health | Home';

  constructor(private _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(this.PageTitle);
  }
}
