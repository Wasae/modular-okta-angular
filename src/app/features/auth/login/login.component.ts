import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(public _authservice:AuthService){
    
  }

  async ngOnInit() {
    // this._authservice.loginWithRedirect()
    // this._authservice.isAuthe.subscribe((res) => {
    //   if(this._authservice.isAuthenticated$){

    //   }
    // })
  }
  

}
