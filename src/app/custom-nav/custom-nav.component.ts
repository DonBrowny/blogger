import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-nav',
  templateUrl: './custom-nav.component.html',
  styleUrls: ['./custom-nav.component.css']
})
export class CustomNavComponent implements OnInit {

  sideNavState: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSideNav() {
    this.sideNavState = !this.sideNavState;
  }

}
