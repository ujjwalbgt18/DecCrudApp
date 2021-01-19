import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  @Input() item: string;
  @Input() taskList;
  constructor() { }

  ngOnInit(): void {
  }

}
