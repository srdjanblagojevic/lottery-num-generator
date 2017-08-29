import { Injectable } from '@angular/core';

@Injectable()
export class LotteryService {

  constructor() { }

  getLotteryNumbers(numberCount: number) {
    const lotteryNumbers = [];

    while (lotteryNumbers.length < numberCount) {
      const lotteryNumber = this.generateRandomLotteryNumber();
      if (!lotteryNumbers.includes(lotteryNumber)) {
        lotteryNumbers.push(lotteryNumber);
      }
    }
    return lotteryNumbers.sort((n1, n2) => n1 - n2);
  }

  generateRandomLotteryNumber() {
    const min = Math.ceil(1);
    const max = Math.floor(50);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
