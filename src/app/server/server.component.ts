import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
           color : white; 
        }
    `]
})
export class ServerComponent {
serverID = 11;
serverStatus = 'offline';

constructor() {

this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

}

 getServerStatus() {
     return this.serverStatus;
 }

 getServerID() {
    return this.serverID;
}

getColor() {

    return this.serverStatus === 'online' ? 'green' : 'red';
}
}
