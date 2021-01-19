import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';
import { TemplateDrivenModule } from './template-driven/template-driven.module';
import { FormsModule } from '@angular/forms';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { TestGuardModule } from './test-guard/test-guard.module';
import { NgxSpinnerModule } from "ngx-spinner"; 
import { FlightModule } from './flight/flight.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToDoAppModule } from './to-do-app/to-do-app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PostModule,
    TemplateDrivenModule,
    HttpClientModule,
    FormsModule,
    AuthModuleModule,
    TestGuardModule,
    NgxSpinnerModule,
    FlightModule,
    BrowserAnimationsModule,
    NgbModule,
    ToDoAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
