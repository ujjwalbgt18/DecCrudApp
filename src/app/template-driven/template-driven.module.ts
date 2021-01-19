import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, TestComponent],
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule,
    FormsModule
  ]
})
export class TemplateDrivenModule { }
