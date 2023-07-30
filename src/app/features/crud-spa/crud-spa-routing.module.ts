import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { CreateEditDemoComponent } from './create-edit-demo/create-edit-demo.component';
import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
  {
    path:"demo",
    canActivate: [ AuthGuard ],
    component:DemoComponent
  },
  {
    path:"create",
    canActivate: [ AuthGuard ],
    component:CreateEditDemoComponent
  },
  {
    path:"edit/:id",
    canActivate: [ AuthGuard ],
    component:CreateEditDemoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudSpaRoutingModule { }
