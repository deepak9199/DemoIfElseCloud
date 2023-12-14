import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from 'src/app/models/api-data';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  @Input() message: Transaction;
  isPopupVisible: boolean = false;
  constructor(private sharedservice: SharedService) {}
  ngOnInit() {
    this.sharedservice.functionTriggerObservablePopup.subscribe(() => {
      this.onCloseClick();
    });
  }

  onCloseClick(): void {
    this.ngOnInit();
    if (this.isPopupVisible === true) {
      this.isPopupVisible = false;
    } else {
      this.isPopupVisible = true;
    }
  }
}
