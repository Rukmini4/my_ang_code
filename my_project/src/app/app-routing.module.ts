import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AddcircleComponent } from './addcircle/addcircle.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { StudentComponent } from './student/student.component';
import { Landing2Component } from './admin/landing2/landing2.component';

const routes: Routes = [
  {path : '',component:LandingComponent},
  {path : 'landing',component: LandingComponent},
  {path : 'home',component:HomeComponent},
  {path : 'addcircle',component:AddcircleComponent},
  {path : 'student',component: StudentComponent},
  {path : 'landing2', component: Landing2Component},
  // {
   // path:'items',
   // loadChildren:() => import('./items/items.module').then(m => m.ItemsModule)
  // },
  {path : 'studentModule', loadChildren:()=>import('./student/student.module').then(m => m.StudentModule)},
  {path : 'admin', loadChildren:()=>import('./admin/admin.module').then(mod => mod.AdminModule)},
  {path:'**',component: PagenofoundComponent},//wildcard route
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
