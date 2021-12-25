import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ShareService } from 'src/app/share.service';




@NgModule({
  declarations:  [ HomeComponent, ReactiveFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  exports:[HomeComponent,ReactiveFormComponent],
  providers:[ShareService]
})
export class HeaderModule { }
