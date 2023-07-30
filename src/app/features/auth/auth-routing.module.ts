import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',  
    component:LoginComponent
  },
  {
    path: 'home',
    canActivate: [ AuthGuard ],
    component:HomeComponent
  },
  {
    path:'error',
    component:ErrorComponent
  },
  {
    path:'profile',
    canActivate: [ AuthGuard ],
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
