import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AddcircleComponent } from './addcircle/addcircle.component';
import { FormsModule } from '@angular/forms';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { StudentComponent } from './student/student.component';
console.log('app module........');
@NgModule({
  declarations: [ //components,directive,pipes
    AppComponent,
    LandingComponent,
    AddcircleComponent,
    PagenofoundComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
