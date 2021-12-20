import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auth/components/home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { AddcoursedetailsComponent } from './modules/addcoursedetails/addcoursedetails.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { StudentComponent } from './layouts/student/student.component';
import { StudenthomeComponent } from './modules/studenthome/studenthome.component';
import { StudentcoursesComponent } from './modules/studentcourses/studentcourses.component';



const routes: Routes = [
  { path: '',
  component: HomeComponent,
  //component: StudentComponent
},

  { path: 'student',
  //component: HomeComponent,
  component: StudentComponent,
    children : [{
    path:'home', 
    component: StudenthomeComponent
  },
  {
    path:'studentcourses', 
    component: StudentcoursesComponent
  },
]
},

  {
  path: 'dashboard',
  component: DefaultComponent ,
  
  children : [{
    path:'', 
    component: DashboardComponent
  },{
    path:'posts',
    component: PostsComponent,
  },
  {
    path:'addcoursedetails/:name',
    component: AddcoursedetailsComponent,
    // data: { item: [item.name] }
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
