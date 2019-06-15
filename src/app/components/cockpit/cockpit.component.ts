import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  todoName: string;

  @Output() createToDoEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addToDo() {
    this.createToDoEvent.emit(this.todoName);
  }

}
