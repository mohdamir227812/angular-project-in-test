import { Component, OnInit } from '@angular/core';
import { AniamgService } from '../aniamg.service';
import{delay} from 'rxjs/operators'
import { syntaxError } from '@angular/compiler';

@Component({
  selector: 'app-animatiom',
  templateUrl: './animatiom.component.html',
  styleUrls: ['./animatiom.component.css']
})
export class AnimatiomComponent implements OnInit {
  spinner:boolean =false;
constructor(){}
 ngOnInit(): void {
    setTimeout(() => {
      this.spinner=true
   },5000);
  }

  
 
}
