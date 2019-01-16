import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html'

})
export class ServerComponent {
serverID = 11;
serverStatus = 'offline';


 getServerStatus() {
     return this.serverStatus;
 }

 getServerID() {
    return this.serverID;
}
}
