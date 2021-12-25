import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  gander=[
   { name:'male',id:1},
    {name:'female',id:2}
  ];

  myform:FormGroup;

  objectget:any=
     {
      name:'',
      emial:'',
      language:'',
      gander:'',
      
    }
   
  
   
  

  onclickget(){
    this.objectget.name=this.myform.get('username')?.value;
   this.objectget.emial=this.myform.get('email')?.value;
    this.objectget.language=this.myform.get('language')?.value;
   this.objectget.gander=this.myform.get('gander')?.value;
   console.log(this.objectget.name)
  };

  onclickset(){
    this.myform.setValue({
      'username':'amir',
      'email':'abcA@gmail.com',
      'language':'html',
      'gander':'male',
    })
  }

  onclickpatch(){
    this.myform.patchValue({
      'username':'zeeshan',
      'gander':'male'
    })
  }

  onsubmit(){
   let  name=this.myform.get('username')?.value;
   let  email=this.myform.get('email')?.value;
  let language=this.myform.get('language')?.value;
   let  gander=this.myform.get('gander')?.value;
  
   console.log(name + email + language  +gander)
   
  }


    
  
  constructor() { }



  ngOnInit(): void {
    this.myform=new FormGroup({

      'nameemail':new FormGroup({
        'username':new FormControl('',[Validators.required,Validators.minLength(5)]),
        'email':new FormControl('',[Validators.required,Validators.email]),
      }),
     
      'language':new FormControl('',[Validators.required]),
      'gander':new FormControl('',[Validators.required]),
    });
  }
 
}
