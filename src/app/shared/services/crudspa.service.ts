import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudspaService {

  constructor() { }

  private tabledata:any[] = []
  pushToDs(data:any){
    this.tabledata.push(data)
  }

  removeFromDs(data:any){
    var ix = this.tabledata.indexOf(data)
    this.tabledata.splice(ix,1)
  }

  modifyDs(data:any,ix:any){
    if(this.tabledata[ix]){
      this.tabledata[ix] = data
    }
  }

  getData(){
    return this.tabledata
  }

  getByIx(ix:any){
    if(this.tabledata[ix])
      return this.tabledata[ix]
    else
      return null
  }
}
