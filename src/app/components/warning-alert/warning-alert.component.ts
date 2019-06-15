import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  message: string = `Maximum client refresh threshold of 100 has been reached.`;
  toggle = false;
  handle : any;

  constructor() {
    this.handle = setInterval(() => {
      console.log('something.');
    }, 1000);
  }

  ngOnInit() {
  }

  clear() {
    clearInterval(this.handle);
    this.toggle = !this.toggle;
  }

}
