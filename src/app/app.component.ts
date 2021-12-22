import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { AppService } from './dashboard_service/app.service';
import {GlobalConstants} from './global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'elearning';

  constructor(private router: Router, private appService: AppService){}

  ngOnInit(): void {
    let authToken = localStorage.getItem(GlobalConstants.authTokenKey);
    console.log("Token:"+authToken);
    if(authToken){
      this.appService.isLoggedIn().subscribe((res)=>{
        if(res.success){
          if(res.user.username === "admin_admin"){
            this.router.navigate(["dashboard"]);
          } else {
            this.router.navigate(["student/home"]);
          }
        } else {
          alert("Something went wrong, may be user not found");
        }
      });
    } else {
      //not logged in, send user to login page
    }
  }
}
