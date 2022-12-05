import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  template:`<input type="text" [(ngModel)]="enterText">`,
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  enterText="";
}
