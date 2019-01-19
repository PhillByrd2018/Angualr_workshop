import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userName = '';
  userMessage = '';
  allowNewUser = false;
  userCreationMessage = '';


  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
      this.userMessage = 'UserName data is ready to be stored. ';
    }, 1300);

   }

   onCreateUser( userName: any ) {

      if (this.userName !== '') {

        this.userName = userName;
        this.userCreationMessage = 'User was successfully created. The User Name is: ' + this.userName;
      } else {
        this.userCreationMessage = 'User Name not Valid. The User Name can not be empty.' ;
      }

   }



  ngOnInit() {
  }

}
