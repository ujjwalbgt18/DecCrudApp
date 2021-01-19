import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsLoggedGuard } from './test-guard/is-logged.guard';
import { TestRouteGuardGuard } from './test-guard/test-route-guard.guard';


const routes: Routes = [
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule',
    canActivate: [TestRouteGuardGuard]
  },
  {
    path: 'temp',
    loadChildren: './template-driven/template-driven.module#TemplateDrivenModule',
    canActivate: [TestRouteGuardGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth-module/auth-module.module#AuthModuleModule',
    canActivate: [TestRouteGuardGuard]
  },
  {
    path: 'routeguard',
    loadChildren: './test-guard/test-guard.module#TestGuardModule'
  },
  {
    path: 'flight',
    loadChildren: './flight/flight.module#FlightModule'
  },
  {
    path: 'todoapp',
    loadChildren: './to-do-app/to-do-app.module#ToDoAppModule'
  },
  {
    path: '',
    redirectTo: 'post',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
