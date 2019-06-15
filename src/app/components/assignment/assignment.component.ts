import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  username = '';

  someData: number[];
  
  constructor() {
    this.someData = [1, 2, 3, 4, 5]
  }

  ngOnInit() {
  }

  getColor() {
    return 'red';
  }


}
