import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UserService {

    activeUsers = ['Max', 'Phill'];
    inactiveUsers = ['Chris', 'Mallory'];

    constructor(private counterService: CounterService) {}

    SetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.incrementActiveCounter();
    }

    SetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.incrementInactiveCounter();
      }
}