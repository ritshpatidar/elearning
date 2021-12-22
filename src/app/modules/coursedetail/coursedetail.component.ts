import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/dashboard_service/app.service';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

   gridColumns = 3;
   modules = [
    {module_name:"Loading", video_link:"ZgMw__KdjiI", module_file:""},
  ]
  moduleLoaded = false;
  apiUrl = GlobalConstants.apiURL;

  constructor(private appService: AppService) { }

  ngOnInit(): void {

  }

  getCourse(course_name: string){
    this.appService.getCourse(course_name).subscribe((res)=>{
      console.log("Response Here");
      console.log(res);
      if(res.success){
        //Do things
        this.modules = res.result.content;
        this.moduleLoaded = true;
      } else {
        alert("Something went wrong");
      }
    });
  }
}
