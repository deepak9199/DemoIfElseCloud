import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHistoryGridComponent } from './transaction-history-grid.component';

describe('TransactionHistoryGridComponent', () => {
  let component: TransactionHistoryGridComponent;
  let fixture: ComponentFixture<TransactionHistoryGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionHistoryGridComponent]
    });
    fixture = TestBed.createComponent(TransactionHistoryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
