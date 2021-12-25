import { Injectable } from '@angular/core';


export class ShareService {
    objects:[]=[];
  getName(data:any){
      this.objects=data;
    
  };

  setobject(){
    return this.objects
  }

  constructor() { }
}
