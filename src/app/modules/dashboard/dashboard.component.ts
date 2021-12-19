import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';

export interface PeriodicElement {
  name: string;
  position: number;
  students_enrolled:number
  no_of_modules:number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'HTML', students_enrolled:10,no_of_modules:4},
  {position: 2, name: 'Java', students_enrolled:11, no_of_modules:5},
  {position: 3, name: 'C++', students_enrolled:13,no_of_modules:8},
  {position: 4, name: 'Game Development', students_enrolled:20,no_of_modules:9},
  {position: 5, name: 'Go', students_enrolled:12,no_of_modules:7},
  {position: 6, name: 'Graphics', students_enrolled:6,no_of_modules:3},
  {position: 7, name: 'Physics', students_enrolled:9,no_of_modules:6},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'students_enrolled', 'no_of_modules'];
  dataSource = ELEMENT_DATA;
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
