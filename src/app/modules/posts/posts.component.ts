import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/dashboard_service/app.service';
import { NewcourseComponent } from '../newcourse/newcourse.component';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  title = 'Card View Demo';
  courses = [{name:"", image:"", _id:""}];
  coursesFetched = false;
  gridColumns = 3;

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

  deleteCourse(id:string){
    this.appService.deleteCouse(id).subscribe((res)=>{
      console.log(res);
      if(res.success){
        alert("Course deleted");
      } else {
        alert("Could not delete course");
      }
    })
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  onCreate() {
    this.dialog.open(NewcourseComponent)
  }

  onRefresh(){
    this.coursesFetched=false;
    this.getCourses();
  }

}
