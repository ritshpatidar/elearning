import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {GlobalConstants} from '../global-constants';

/*@Injectable({
  providedIn: 'root'
})*/


@Injectable()
export class AuthService {
  private apiUrl = GlobalConstants.apiURL;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  constructor(private http: HttpClient) { }

  signUp(signup_data:{
    username: string, 
    pswd:string, 
    email:string,
    confirm_password:string}
  ): Observable<any> {
    let body = new HttpParams({fromObject:signup_data});

    return this.http.post(this.apiUrl+"signup",body.toString(), this.httpOptions)
    .pipe(
      catchError(err=>of([]))
    );
  }

  logIn(login_data:{username:string, pswd:string}):Observable<any>{
    let body = new HttpParams({fromObject:login_data});
    return this.http.post(this.apiUrl+"login",body.toString(),this.httpOptions)
    .pipe(
      catchError(err=>of([]))
    );
  }
}

/*
Sign Up Response Type
{
  "message": "User Registered Successfully",
  "results": {
      "user": {
          "username": "ritess",
          "email": "ritess@gmail.com",
          "pswd": "ritess",
          "confirm_password": "ritess",
          "courses_enrolled": [],
          "_id": "61b58e97556f3baf7bc4ebcb",
          "__v": 0
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpdGVzcyIsImlhdCI6MTYzOTI4ODQ3MiwiZXhwIjoxNjM5MzA2NDcyfQ.ID31Qeyk9viGnje_ip33OnohcL3X7u9lEoFFkNnODQw"
  }
}
*/