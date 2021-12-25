import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AniamgService {
   
   spinner=new BehaviorSubject(false)
  constructor() { }
}
