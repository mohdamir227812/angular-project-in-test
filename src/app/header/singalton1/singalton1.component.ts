import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-singalton1',
  templateUrl: './singalton1.component.html',
  styleUrls: ['./singalton1.component.css']
})
export class Singalton1Component implements OnInit {

  senddata(){
    return{
      name:'amir',
      age:22,

    }
  }

  constructor(private _share:ShareService) { }

  ngOnInit(): void {
    this._share.getName(this.senddata())
  }

}
