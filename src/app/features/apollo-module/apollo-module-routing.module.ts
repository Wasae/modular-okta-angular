import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract/contract.component';

const routes: Routes = [
  {
    path:"",
    component:ContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApolloModuleRoutingModule { }
