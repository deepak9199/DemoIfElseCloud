import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private functionTriggerSubjectPopup = new Subject<void>();
  constructor() {}
  // Method to trigger the function call
  triggerFunctionPopup() {
    this.functionTriggerSubjectPopup.next();
  }
  // Observable for components to subscribe to
  get functionTriggerObservablePopup() {
    return this.functionTriggerSubjectPopup.asObservable();
  }
}
