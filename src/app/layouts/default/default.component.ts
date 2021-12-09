import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  SideBarOpen = true;

  constructor() { }

  ngOnInit(): void { }

  sideBarToggler() {
    this.SideBarOpen = !this.SideBarOpen;
  }
  

}
