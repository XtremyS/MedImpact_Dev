import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  PageTitle = 'Book My Health | About Us';
  constructor(private _titleService: Title) {}

  ngOnInit(): void {
    this._titleService.setTitle(this.PageTitle);
  }
}
