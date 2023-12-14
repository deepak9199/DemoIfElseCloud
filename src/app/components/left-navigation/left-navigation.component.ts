import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.scss'],
})
export class LeftNavigationComponent {
  constructor() {}
  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
  }
}
