import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
navbarOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
 toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
