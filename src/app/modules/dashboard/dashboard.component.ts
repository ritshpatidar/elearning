import { Component, OnInit} from '@angular/core';
import { EChartsOption } from 'echarts';
import { AppService } from 'src/app/dashboard_service/app.service';

export interface PeriodicElement {
  name: string;
  position: number;
  students_enrolled:number
  no_of_modules:number
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'students_enrolled', 'no_of_modules'];
  dataSource: PeriodicElement[] = [
    {position: 1, name: 'HTML', students_enrolled:10,no_of_modules:4}
  ];
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['C++', 'HTML', 'Java', 'Game Development', 'Go', 'Graphics', 'Physics'],
      axisLabel: {
        interval: 0,
        rotate: 30
      }
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar',
      },
    ],
  };
  courses=[];
  total_enrolled=-1;
  total_courses=0;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.appService.getAllCourses().subscribe((res)=>{
      console.log(res);
      if(res.success){
        this.courses = res.results;
        this.total_courses=res.results.length;
        this.total_enrolled = this.setOtherData(res.results);
      }
    });
  }

  setOtherData(courses: any):number{
    let total_enrolled:number = 0;
    let dataSource: PeriodicElement[] = [];
    let courseNames:string[] = [];
    let studentEnolledPerCourse:string[] = [];

    courses.forEach((value:any,index:any) => {
      total_enrolled += value.students_enrolled.length;
      dataSource.push({
        position:index, 
        name: value.name,
        students_enrolled:value.students_enrolled.length,
        no_of_modules:value.content.length
      });
      courseNames.push(value.name);
      studentEnolledPerCourse.push(value.students_enrolled.length);
    });
    this.dataSource = dataSource;
    this.setChartData(courseNames,studentEnolledPerCourse);
    return total_enrolled;
  }

  setChartData(names:any[],data:any[]){
    this.chartOption = {
      xAxis: {
        type: 'category',
        data: names,
        axisLabel: {
          interval: 0,
          rotate: 30
        }
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: data,
          type: 'bar',
        },
      ],
    }
  }

}
