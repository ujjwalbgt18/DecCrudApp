import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {
  bookForm: FormGroup;
  model: NgbDateStruct;
  age: true;
  disabled: any;
  isDisabled:boolean;
  
  constructor() { }
  myAmount:any;
  ngOnInit(): void {
    this.isDisabled= true;
    this.bookForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.email]),
      age: new FormControl({value: '', disabled: true}, [Validators.required]),
      passenger: new FormControl(1, [Validators.required]),
      source: new FormControl('', [Validators.required]),
      destination: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      amount: new FormControl('2000', [Validators.required]),
      tax: new FormControl('', [Validators.required]),
      total: new FormControl('', [Validators.required])
  }); 

  this.myAmount = this.bookForm.value.amount; 
 this.onChanges();
 this.taxChange();
}
onChanges(): void {
  this.bookForm.controls['passenger'].valueChanges.subscribe(val => {
    var a= val;
    var b = this.myAmount;
    var c = a*b;
    this.bookForm.patchValue({amount :  c});
    this.taxChange();
    if(this.bookForm.value.passenger > 0){
      this.bookForm.controls['age'].enable();
      }
      else{
        this.bookForm.controls['age'].disable();
      }
  });

  this.bookForm.controls['age'].valueChanges.subscribe(val => {
    var newAge = val;
    this.taxChange(newAge);
  });

}
amountChange(){
   this.myAmount = this.bookForm.value.amount;
   alert(this.myAmount);
}
taxChange(ageVal?:number){
  console.log(ageVal,"AgeValue");
  
  var a= ageVal;
  var b = this.bookForm.value.amount;
  var taxAmount;
  if(a<10){
     taxAmount = (b/100)*4.9;
  }
  else if(a>=10 && a<20){
     taxAmount = (b/100)*7.65;
  }
  else{
     taxAmount = (b/100)*9.18;
  }
  console.log(taxAmount);
  this.bookForm.patchValue({tax :  taxAmount,total :  b + taxAmount});
}


onSubmit() {  
  console.log(this.bookForm.value);
  console.log(this.bookForm.value.age, "t");
  }
  get f() {
    return this.bookForm.controls;
  }
  
}
