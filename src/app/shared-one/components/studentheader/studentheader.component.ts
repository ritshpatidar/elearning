import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-studentheader',
  templateUrl: './studentheader.component.html',
  styleUrls: ['./studentheader.component.css']
})
export class StudentheaderComponent implements OnInit {

    @Output() toggleSide = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSide.emit();
  }

  signOut(){
    localStorage.removeItem(GlobalConstants.authTokenKey);
    this.router.navigate([""]);
  }

}
