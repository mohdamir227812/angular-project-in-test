import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModule } from './headers/header/header.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Singalton1Component } from './header/singalton1/singalton1.component';
import { Singalton2Component } from './header/singalton2/singalton2.component';
import { MainformComponent } from './mainform/mainform.component';
import { ImagesComponent } from './images/images.component';
import { AnimatiomComponent } from './animatiom/animatiom.component';
import { promiseComponent } from './promise/promise.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    Singalton1Component,
    Singalton2Component,
    MainformComponent,
    ImagesComponent,
    AnimatiomComponent,
    promiseComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
