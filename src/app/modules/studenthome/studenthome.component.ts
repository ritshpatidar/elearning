import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AppService } from 'src/app/dashboard_service/app.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

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

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  onRefresh(){
    this.coursesFetched=false;
    this.getCourses();
  }

}
