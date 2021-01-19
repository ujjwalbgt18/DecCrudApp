import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IsLoggedGuard } from './is-logged.guard';
import { LoginComponent } from './login/login.component';
import { TestRouteGuardGuard } from './test-route-guard.guard';

const routes: Routes = [
    { path: 'testlogin', component: LoginComponent, canActivate: [IsLoggedGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [TestRouteGuardGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TestGuardRoutingModule { }