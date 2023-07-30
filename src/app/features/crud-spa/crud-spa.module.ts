import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudSpaRoutingModule } from './crud-spa-routing.module';
import { DemoComponent } from './demo/demo.component';
import { CreateEditDemoComponent } from './create-edit-demo/create-edit-demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';



@NgModule({
  declarations: [
    DemoComponent,
    CreateEditDemoComponent
  ],
  imports: [
    CommonModule,
    CrudSpaRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CrudSpaModule { }
