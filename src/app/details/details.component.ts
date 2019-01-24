import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  showDetails = true;
  log = [];
  constructor() { }

  onShowDetails() {
    this.showDetails = !this.showDetails;


  }

  addToLog() {
    // this.log.push(this.log.length + 1);
    this.log.push(new Date);

  }
  ngOnInit() {
  }

}
