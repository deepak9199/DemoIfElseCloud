import { Component } from '@angular/core';
import { ApiData, Transaction } from 'src/app/models/api-data';
import { ApiDataService } from 'src/app/services/api-data.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-transaction-history-grid',
  templateUrl: './transaction-history-grid.component.html',
  styleUrls: ['./transaction-history-grid.component.scss'],
})
export class TransactionHistoryGridComponent {
  transaction: Transaction[] = [];
  loading: boolean = true;
  popupdata: Transaction;
  constructor(
    private apiservice: ApiDataService,
    private sharedservice: SharedService
  ) {}

  ngOnInit() {
    this.getdata();
    document.addEventListener('DOMContentLoaded', function () {
      const openButton = document.getElementById('openPopupButton');
      const closeButton = document.getElementById('closePopupButton');
      const popupContainer = document.getElementById('popupContainer');

      if (openButton && closeButton && popupContainer) {
        openButton.addEventListener('click', function () {
          popupContainer.style.display = 'flex';
        });

        closeButton.addEventListener('click', function () {
          popupContainer.style.display = 'none';
        });
      }
    });
  }
  // pop up display
  togglePopup(data: Transaction) {
    this.popupdata=data
    console.log(this.popupdata);
    this.sharedservice.triggerFunctionPopup();
  }

  // api service call
  private getdata() {
    this.loading = true;
    this.apiservice.get().subscribe({
      next: (response: ApiData) => {
        this.transaction = response.transactions;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  // Function to get the formatted date from a date string (formatted as "Mar 16 2023")
  getFormattedDate(dateTimeString: string): string {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    const formattedDate = new Date(dateTimeString).toLocaleDateString(
      'en-US',
      options
    );
    return formattedDate;
  }

  // Function to get the formatted time from a date string (formatted as "HH:mm:ss")
  getTimeFromDateISOString(dateTimeString: string): string {
    const dateTime = new Date(dateTimeString);
    const hours = String(dateTime.getHours()).padStart(2, '0');
    const minutes = String(dateTime.getMinutes()).padStart(2, '0');
    const seconds = String(dateTime.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  // search function
  tableSearch(value: string) {
    let filter = value.toUpperCase();
    let mytable = document.getElementById('table');
    let tr = mytable?.getElementsByTagName('tr');

    if (tr) {
      for (let i = 0; i < tr.length; i++) {
        let td = tr[i]?.getElementsByTagName('td')[0];
        let td1 = tr[i]?.getElementsByTagName('td')[1];
        let td2 = tr[i]?.getElementsByTagName('td')[2];
        let td3 = tr[i]?.getElementsByTagName('td')[3];
        let td4 = tr[i]?.getElementsByTagName('td')[4];
        let td5 = tr[i]?.getElementsByTagName('td')[5];

        if (td) {
          let textvalue = td.textContent || td.innerHTML;
          let textvalue1 = td1?.textContent || td1?.innerHTML;
          let textvalue2 = td2?.textContent || td2?.innerHTML;
          let textvalue3 = td3?.textContent || td3?.innerHTML;
          let textvalue4 = td4?.textContent || td4?.innerHTML;
          let textvalue5 = td5?.textContent || td5?.innerHTML;

          if (
            textvalue.toUpperCase().indexOf(filter) > -1 ||
            (textvalue1 && textvalue1.toUpperCase().indexOf(filter) > -1) ||
            (textvalue2 && textvalue2.toUpperCase().indexOf(filter) > -1) ||
            (textvalue3 && textvalue3.toUpperCase().indexOf(filter) > -1) ||
            (textvalue4 && textvalue4.toUpperCase().indexOf(filter) > -1) ||
            (textvalue5 && textvalue5.toUpperCase().indexOf(filter) > -1)
          ) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }
      }
    }
  }
}
