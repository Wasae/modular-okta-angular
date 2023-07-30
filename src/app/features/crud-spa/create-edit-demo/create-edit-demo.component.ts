import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudspaService } from 'src/app/shared/services/crudspa.service';

@Component({
  selector: 'app-create-edit-demo',
  templateUrl: './create-edit-demo.component.html',
  styleUrls: ['./create-edit-demo.component.scss']
})
export class CreateEditDemoComponent implements OnInit {
  @Input() id?: string;
  mode:any =0
  firstname:any
  lastname:any
  handle:any

  constructor(private _crudspaservice:CrudspaService,private _router:Router){

  }

  ngOnInit(): void {
    if (this.id != undefined){
      this.mode = 1
      this.fillModel()
    } 
    else
      this.mode = 0
  }

  fillModel(){
    const d = this._crudspaservice.getByIx(this.id)
    this.firstname = d.firstname
    this.lastname = d.lastname
    this.handle = d.handle
  }

  validations():string{
    let d =""
    if (!this.firstname) {
      d+="Enter First Name.\n"
    }
    if (!this.lastname) {
      d+="Enter Last Name.\n"
    }
    if (!this.handle) {
      d+="Enter Handle.\n"
    }
    return d
  }

  saveToService(){
    let validationMessages = this.validations()
    if (!validationMessages.length) {
      var d = {
        "firstname":this.firstname,
        "lastname":this.lastname,
        "handle":this.handle
      }
      let message = ""
      if (this.mode == 0) {
        this._crudspaservice.pushToDs(d) 
        message = "Demo Saved Successfully"
      }
      else if (this.mode = 1){
        this._crudspaservice.modifyDs(d,this.id)
        message = "Demo Update Successfully"
      }
      if (message) {
        alert(message)   
      }
    }
    else{
      alert(validationMessages)
    }
  }

  backToList(){
    this._router.navigateByUrl("/crudspa/demo")
  }
}
