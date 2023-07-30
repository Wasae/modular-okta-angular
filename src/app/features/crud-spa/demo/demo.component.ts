import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudspaService } from 'src/app/shared/services/crudspa.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  constructor(public _router:Router,public _crudspaservice:CrudspaService){

  }
  
  createDemo(){
    this._router.navigateByUrl("/crudspa/create")
  }

  setForEdit(ix:any){
    this._router.navigateByUrl("/crudspa/edit/"+ix)
  }


}
