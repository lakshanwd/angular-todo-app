import { Component } from '@angular/core';
import { ToDoItem } from './to-do-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  todo = 'app';
  todoItems: ToDoItem[] = [];

  addToDo($evt) {
    if (this.todo.length > 0) {
      this.todoItems.push(new ToDoItem(0, this.todo));
      this.todo = '';
    }
  }

  removeToDo($evt) {
    console.log($evt);
  }
}
