import { Component } from '@angular/core';
import { ApiData, Balance } from 'src/app/models/api-data';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-total-balance-card',
  templateUrl: './total-balance-card.component.html',
  styleUrls: ['./total-balance-card.component.scss'],
})
export class TotalBalanceCardComponent {
  balance: Balance;
  loading: boolean = true;
  constructor(private apiservice: ApiDataService) {}
  ngOnInit() {
    this.getdata();
  }
  // api service call
  private getdata() {
    this.loading = true;
    this.apiservice.get().subscribe({
      next: (response: ApiData) => {
        this.balance = response.balance;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
