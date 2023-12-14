import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBalanceCardComponent } from './total-balance-card.component';

describe('TotalBalanceCardComponent', () => {
  let component: TotalBalanceCardComponent;
  let fixture: ComponentFixture<TotalBalanceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalBalanceCardComponent]
    });
    fixture = TestBed.createComponent(TotalBalanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
