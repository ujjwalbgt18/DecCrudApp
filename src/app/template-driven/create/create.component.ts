import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    userName = 'Bob';
    email: string;
    nickName: string;
    password: string;

    onSubmit(form: NgForm) {
      if (form.valid) {
        console.log(form.value);
        
      }
      console.log(form, "Form Value");
    }
}
