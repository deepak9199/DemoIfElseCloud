import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss'],
})
export class TopNavigationComponent {
  close: boolean = false;

  // function for close notification
  closeNotification() {
    this.close = true;
  }
}
