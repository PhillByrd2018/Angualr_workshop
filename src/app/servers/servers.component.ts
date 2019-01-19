import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverName = 'Starting test Server Name';

serverCreationStatus = 'No Server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

   }

   onCreateServer() {
    this.serverCreationStatus = 'Server was created. The name of the new server is: ' + this.serverName;

   }

   onServerUpdateName($event: any ) {
      console.log(event);
      this.serverName = (<HTMLInputElement> event.target).value;
   }

  ngOnInit() {
  }

}
