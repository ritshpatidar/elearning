import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import {GlobalConstants} from './global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elearning';

  constructor(private router: Router){}

  ngOnInit(): void {
    let authToken = localStorage.getItem(GlobalConstants.authTokenKey);
    console.log("Token:"+authToken);
    if(authToken){
      //logged in
      //optional check using api /isLoggedIn, pass authorization token, it will return user data
      //send user to admin dashboard if username is admin, otherwise send it to student dashboard
      this.router.navigate(["dashboard"]);
    } else {
      //not logged in, send user to login page
    }
  }
}
