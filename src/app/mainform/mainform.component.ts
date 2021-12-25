import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mainform',
  templateUrl: './mainform.component.html',
  styleUrls: ['./mainform.component.css']
})
export class MainformComponent implements OnInit {

  loginform:FormGroup;
  nofildname=["amir","mohd"];

  nanames(controls:FormControl){
    if(this.nofildname.indexOf(controls.value)!== -1){
      return {'naname valid':true}
    }
    return null;
   
  }


  constructor() { }

  ngOnInit(): void {
    this.loginform=new FormGroup({
      'username':new FormControl('',[Validators.required,this.nanames.bind(this)]),
      'email':new FormControl('',[Validators.required,Validators.email])
    })
  }


}
