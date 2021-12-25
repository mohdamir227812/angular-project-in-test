import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share.service';

@Component({
  selector: 'app-singalton2',
  templateUrl: './singalton2.component.html',
  styleUrls: ['./singalton2.component.css']
})
export class Singalton2Component implements OnInit {
     object:any=[];
  constructor(private _share:ShareService) { }

  ngOnInit(): void {
   
     this.object=this._share.setobject();

  }

}
