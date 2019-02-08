import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbersDirectives = [1, 3, 5];
  evenNumbersDirectives =  [2, 4];


  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);

    if ( firedNumber % 2 === 0) {
        this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }

  }
}
