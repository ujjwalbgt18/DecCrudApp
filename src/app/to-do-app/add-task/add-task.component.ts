import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  myTasks: any;
  taskList: any = [];
  show: boolean;
  taskDone = false;
  checkval:false;
  isChecked: any;
  totalDone:number = 0;
  currentItem = 'Television';

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
      this.taskList.push({ "value": form.value.task });
      form.reset();
      console.log(this.taskList);
      this.show = true;
      this.taskComplete();
  }
  remove(i){
    this.taskList.splice(i, 1);
    if(this.taskList.length == 0){
      this.show = false
    }
  }
  checkCheckBoxvalue(event, index){
    this.taskList[index].isChecked = !this.taskList[index].isChecked; 
    this.taskList[index].testimggggg = "TestValue";
    this.taskComplete();
    }
    taskComplete(){
      let i;
      let count = 0;
      let length= this.taskList.length;
      for(i = 0;i < length;i++){
        if(this.taskList[i].isChecked == true){
          count++;
        }
      }
      console.log(count,"count");
      this.totalDone = count;
      
    }
}
