import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public _oktaauthservice:AuthService){

  }

  @Output("closesidepanel") closesidepanel: EventEmitter<any> = new EventEmitter();

  closePanel(){ 
    this.closesidepanel.emit()
  }

  async login(){
    await this._oktaauthservice.loginWithRedirect()
  }

  async logout(){
    await this._oktaauthservice.logout()
  }
}
