import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-homepage.component.html',
  styleUrls: ['./navbar-homepage.component.css']
})
export class NavbarHomepageComponent implements OnInit {
  public isLoggedIn: boolean;
  public onClick: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    const sessionStorage = this.document.defaultView?.sessionStorage;
    this.isLoggedIn = sessionStorage && sessionStorage.getItem('access_token') ? true : false;
    this.onClick = false;
  }

  burgerClick() {
    if (this.onClick) {
      this.onClick = false;
    }
    else {
      this.onClick = true
    }
  }
}
