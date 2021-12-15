import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GlobalConstants } from '../global-constants';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  private apiUrl = GlobalConstants.apiURL;
  private httpOptionsUrlEncoded = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer '+localStorage.getItem(GlobalConstants.authTokenKey)
    })
  };
  private httpOptionsFormData = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer '+localStorage.getItem(GlobalConstants.authTokenKey)
    })
  };

  addCourse(data:{
    active: boolean, 
    name: string,
    image:string,
    course_file:any,
    students_enrolled:Array<string>,
    content:Array<any>
  }):Observable<any>{
    console.log(localStorage.getItem(GlobalConstants.authTokenKey))
    let body = new FormData();
    body.append("active",String(data.active));
    body.append("name",data.name);
    body.append("image",data.image);
    body.append("students_enrolled",JSON.stringify(data.students_enrolled));
    body.append("content", JSON.stringify(data.content));
    body.append("course_file",data.course_file, data.course_file.name)
    return this.http.post(this.apiUrl+"api/admin/addCourse",body,this.httpOptionsFormData);
  }

  getAllCourses():Observable<any>{
    return this.http.get(this.apiUrl+"api/allCourses", this.httpOptionsUrlEncoded);
  }

  deleteCouse(id:string):Observable<any>{
    return this.http.delete(this.apiUrl+"api/admin/deleteCourse/"+id,this.httpOptionsUrlEncoded);
  }
}
