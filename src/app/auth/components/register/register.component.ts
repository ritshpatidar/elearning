import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import {GlobalConstants} from '../../../global-constants';
import { Router } from '@angular/router';
import { AppService } from 'src/app/dashboard_service/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private appService: AppService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value); 
    console.log(f.valid);

    if(f.valid){
      let signup_data = {
        username: f.value.firstname+"_"+f.value.lastname,
        pswd:f.value.password,
        email:f.value.username,
        confirm_password: f.value.password
      }
      this.authService.signUp(signup_data).subscribe(responseData => {
        console.log("Response Here");
        console.log(responseData);
        if(responseData.success){
          localStorage.setItem(GlobalConstants.authTokenKey, responseData.results.token);
          this.appService.setToken(responseData.results.token);
          this.router.navigate(["student/home"]);
        } else {
          //show error
        }
      }, err=>{
        console.log("Error occured");
        console.log(err);
      });
    }
  }

}

/*
value: {
    "firstname": "RITESH",
    "lastname": "PATIDAR",
    "username": "a@hd.com",
    "password": "123456"
}

valid: boolean
*/
