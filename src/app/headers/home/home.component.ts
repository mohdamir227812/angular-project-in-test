import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//@ViewChild('userform')  userform:ElementRef; 

  userdatahide:boolean=false;
  username='';
userdata={
  name:'',
  email:'',
  mobile:'',
};

ongetvlaue(){

}


  onsubmit(valu:any){
  /* this.userdatahide=true
    this.userdata.name=valu.value.name;
    this.userdata.email=valu.value.email;
    this.userdata.mobile=valu.value.mobile;
    */ 
  };

  oject1:any=[];
  constructor(private _share:ShareService) { }

  ngOnInit(): void {
    this.oject1=this._share.setobject();
  }

}
