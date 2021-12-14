import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GlobalConstants} from "./../../../global-constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getStarted(){
    let authToken = localStorage.getItem(GlobalConstants.authTokenKey);
    if(authToken){
      //logged in
      //optional check using api /isLoggedIn, pass authorization token, it will return user data
      //send user to admin dashboard if username is admin, otherwise send it to student dashboard
      this.router.navigate(["dashboard"]);
    } else {
      //not logged in, send user to login page
      this.router.navigate(["login"]);
    }
  }

}
