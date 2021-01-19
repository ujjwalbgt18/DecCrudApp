import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate() {
    var myItem = localStorage.getItem('LogDetail');
    if(!myItem){
      
      return true;
    }
    else{
      this.router.navigate(['']);
    }
    
  } 
}
