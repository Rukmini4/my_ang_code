import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {

  }

  home() {
    this.router.navigateByUrl('home');
  }
  addcircle(){
    this.router.navigateByUrl('addcircle');
  }
  test(){
    this.router.navigateByUrl('test');
  }
  student(){
    this.router.navigateByUrl('student');
  }
  studentModule(){
    this.router.navigateByUrl('studentModule/studentHome')
      
  }
  adminMod(){
    this.router.navigateByUrl('admin/adminLanding')
  }
}
