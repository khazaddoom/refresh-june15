import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  todos: string[] = ['Do Cloths', 'Buy raincoat'];

  createToDoEventConsumer(newToDoItem:string) {

    this.todos.push(newToDoItem);

  }
   
}
