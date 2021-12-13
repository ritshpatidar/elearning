import { Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import  {GlobalConstants} from './../../../global-constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  signOut(){
    localStorage.removeItem(GlobalConstants.authTokenKey);
    this.router.navigate([""]);
  }

}
