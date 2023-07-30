import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'apollo',  
    loadChildren: () => import('./features/apollo-module/apollo-module.module').then(m => m.ApolloModuleModule)
  },
  {
    path: 'crudspa',
    loadChildren: () => import('./features/crud-spa/crud-spa.module').then(m => m.CrudSpaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    bindToComponentInputs:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
