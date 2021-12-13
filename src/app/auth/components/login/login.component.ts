import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import {GlobalConstants} from '../../../global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    if(f.valid){
      let login_data={
        username: f.value.username,
        pswd: f.value.password
      }
      this.authService.logIn(login_data).subscribe(responseData => {
        console.log("Response Here");
        console.log(responseData);
        if(responseData.success){
          localStorage.setItem(GlobalConstants.authTokenKey, responseData.token);
          //route to dashboard
          this.router.navigate(["dashboard"]);
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
