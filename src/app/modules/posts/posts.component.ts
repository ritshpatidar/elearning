import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/dashboard_service/app.service';
import { GlobalConstants } from 'src/app/global-constants';
import { NewcourseComponent } from '../newcourse/newcourse.component';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  apiUrl = GlobalConstants.apiURL;
  title = 'Card View Demo';
  courses = [{name:"", image:"", _id:""}];
  coursesFetched = false;
  name: any;
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
        res.results.forEach((val:any) => {
          console.log(val.image);
        });
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

  search(){
    if(this.name ==""){
      this.ngOnInit();

    }
    else{
      this.courses = this.courses.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      });
    }
  }
}
