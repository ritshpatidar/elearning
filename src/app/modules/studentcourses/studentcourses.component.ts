import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/dashboard_service/app.service';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-studentcourses',
  templateUrl: './studentcourses.component.html',
  styleUrls: ['./studentcourses.component.css']
})
export class StudentcoursesComponent implements OnInit {
title = 'Card View Demo';
  courses = [{name:"", image:"", _id:""}];
  coursesFetched = false;
  gridColumns = 3;
  apiUrl = GlobalConstants.apiURL;

  constructor(public dialog: MatDialog, private appService: AppService) { }

  ngOnInit(): void {
     this.getCourses();
  }
  
  getCourses(){
    this.appService.getAllCourses().subscribe((res)=>{
      console.log(res);
      if(res.success){
        this.courses = res.results;
        this.coursesFetched=true;
      }
    });
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  onRefresh(){
    this.coursesFetched=false;
    this.getCourses();
  }

  enrollCourse(course_name:string){
    this.appService.isLoggedIn().subscribe((_res)=>{
      console.log(_res);
      if(_res.success){
        this.appService.getUser(_res.user.username).subscribe((res)=>{
          console.log(res);
          if(res.success){
            console.log(res.result.courses_enrolled.indexOf(course_name));
            if(res.result.courses_enrolled.indexOf(course_name) > -1){
              alert("User already enrolled to this course");
            } else {
              console.log("Can be enrolled");
              this.appService.enrollCourse({username:_res.user.username,name:course_name})
              .subscribe((__res)=>{
                console.log(__res);
                if(__res.success){
                  alert("User enrolled Successfully");
                } else {
                  alert(__res.message);
                }
              });
            }
          } else {
            alert(res.message);
          }
        });
      } else {
        alert("Something went wrong");
      }
    });
  }

}
