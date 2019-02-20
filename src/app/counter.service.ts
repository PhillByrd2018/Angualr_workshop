export class CounterService {

    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveCounter() {
        this.activeToInactiveCounter++;
        console.log(this.activeToInactiveCounter);
    }

    incrementInactiveCounter () {
        this.inactiveToActiveCounter++;
        console.log(this.inactiveToActiveCounter);
    }
}