import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { ApiService } from './auth-module/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dec-crud-app';
  loginbtn:boolean;
  logoutbtn:boolean;
  
  constructor(private router: Router,private dataService: ApiService) {
    var myItem = localStorage.getItem('LogDetail');
    if(myItem){
      this.logoutbtn=true;
    }
   }

  logout() {
      localStorage.removeItem('LogDetail');
      this.router.navigate(['']);
      this.logoutbtn=false;
  }
    
  redirects(){
    console.log("Hello World");
    this.router.navigate(['post'], { queryParams: { order: 'popular' } })
  }
    
}

