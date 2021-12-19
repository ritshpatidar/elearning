import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studentheader',
  templateUrl: './studentheader.component.html',
  styleUrls: ['./studentheader.component.css']
})
export class StudentheaderComponent implements OnInit {

    @Output() toggleSide = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

toggleSideBar() {
    this.toggleSide.emit();
  }

}
