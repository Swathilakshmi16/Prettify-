import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursecardComponent } from './coursecard/coursecard.component';
import { OurAllCourseComponent } from './our-all-course/our-all-course.component';

const routes: Routes = [
   {path:'', component:HomeComponent},
   {path:'login', component:LoginComponent},
   {path:'courses',component:OurAllCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
