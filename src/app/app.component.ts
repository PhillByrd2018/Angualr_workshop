import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  oddNumbersDirectives = [1, 3, 5];
  evenNumbersDirectives =  [2, 4];
  customValue = 100;


  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);

    if ( firedNumber % 2 === 0) {
        this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }

  }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
