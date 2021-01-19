import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  guardForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.guardForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.guardForm.controls;
  }
  ngOnInit(): void {
  }
  get email() { return this.guardForm.get('email'); }
  get password() { return this.guardForm.get('password'); }

  submit() {
    this.submitted = true;
    if (this.guardForm.valid) {
      console.log(this.guardForm);
      let key = 'LogDetail';
      let myItem = localStorage.getItem(key);
      let token = this.guardForm.value.email + '+' + this.guardForm.value.password;
      console.log(token, "TOKEN");
      localStorage.setItem(key, token);
      this.router.navigateByUrl('routeguard/dashboard');
    }
  }

}