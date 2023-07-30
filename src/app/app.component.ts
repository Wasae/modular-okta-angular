import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apollo-angular';
  ids:any = {
    "sidebar":"sidebar"
  }

  constructor(public _authservice:AuthService){

  }

  closesidepanel(){
    const el = document.getElementById(this.ids.sidebar)
    if (el) {
      if (el.classList.contains("")) {
        
      }
      else{
        
      }
    }
    alert("Called")
  }
}
