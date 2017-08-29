import { LotteryService } from './../services/lottery.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {

  lotteryNumbers = [];
  lotteryNumbersCount = 6;

  constructor(private lotteryService: LotteryService) {

  }

  onClick() {
    this.lotteryNumbers = this.lotteryService.getLotteryNumbers(this.lotteryNumbersCount);
  }

  getNumberColor(lotteryNumber: number) {
    if (lotteryNumber >= 1 && lotteryNumber <= 9) {
      return 'lottery-number lottery-gray';
    }

    if (lotteryNumber >= 10 && lotteryNumber <= 19) {
      return 'lottery-number lottery-blue';
    }

    if (lotteryNumber >= 20 && lotteryNumber <= 29) {
      return 'lottery-number lottery-pink';
    }

    if (lotteryNumber >= 30 && lotteryNumber <= 39) {
      return 'lottery-number lottery-green';
    }

    return 'lottery-number lottery-yellow';
  }

  ngOnInit() {

  }

}
