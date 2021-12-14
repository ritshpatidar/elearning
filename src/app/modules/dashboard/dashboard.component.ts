import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Pragati'},
  {position: 2, name: 'Akshay'},
  {position: 3, name: 'Pranav'},
  {position: 4, name: 'Anshuman'},
  {position: 5, name: 'Apurva'},
  {position: 6, name: 'Rajagopalan'},
  {position: 7, name: 'Hedi'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
