import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApolloModuleRoutingModule } from './apollo-module-routing.module';
import { ContractComponent } from './contract/contract.component';


@NgModule({
  declarations: [
    ContractComponent
  ],
  imports: [
    CommonModule,
    ApolloModuleRoutingModule
  ]
})
export class ApolloModuleModule { }
