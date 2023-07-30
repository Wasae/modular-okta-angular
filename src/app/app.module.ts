import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApolloModuleModule } from './features/apollo-module/apollo-module.module';
import {AuthModule as AppAuthModule} from './features/auth/auth.module';
import { SharedModule } from './shared/shared.module';
import {authconfig} from './authconfig'
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    AppAuthModule,
    ApolloModuleModule,
    AuthModule.forRoot(authconfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
