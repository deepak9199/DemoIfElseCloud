import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { FirstStaticColumnComponent } from './components/first-static-column/first-static-column.component';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { StaticGridAndGraphComponent } from './components/static-grid-and-graph/static-grid-and-graph.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { TotalBalanceCardComponent } from './components/total-balance-card/total-balance-card.component';
import { TransactionHistoryGridComponent } from './components/transaction-history-grid/transaction-history-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './shared/pop-up/pop-up.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { NumberFormatPipe } from './shared/pipe/numberFormat';
@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    FirstStaticColumnComponent,
    TotalBalanceCardComponent,
    StaticGridAndGraphComponent,
    TransactionHistoryGridComponent,
    PopUpComponent,
    LoadingComponent,
    NumberFormatPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
