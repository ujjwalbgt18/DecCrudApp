import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestRouteGuardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    console.log("TestRouteGuardGuard");
    var myItem = localStorage.getItem('LogDetail');
    if(myItem){
      console.log("True");
      return true;
    }
    else{
      this.router.navigate(['routeguard/testlogin']);
      console.log("False");
      return false;
    }
  }
   
   
}
