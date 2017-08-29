import { LotteryService } from './services/lottery.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LotteryComponent } from './lottery/lottery.component';

@NgModule({
  declarations: [
    AppComponent,
    LotteryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LotteryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
