import { Component, OnInit } from '@angular/core';
import { AniamgService } from '../aniamg.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images:boolean;
  constructor(private _aniamg:AniamgService){
    this._aniamg.spinner.subscribe(res => this.images=res)
  }

  ngOnInit(): void {
    setTimeout(() => {
       //this.images=true;
       this._aniamg.spinner.next(true)
    }, 5000);
  }

}
