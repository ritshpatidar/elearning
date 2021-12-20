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
    image:any,
    category:string,
    duration:number,
    students_enrolled:string,
    content:string
  }):Observable<any>{
    console.log(localStorage.getItem(GlobalConstants.authTokenKey))
    let body = new FormData();
    body.append("active",String(data.active));
    body.append("name",data.name);
    body.append("students_enrolled",data.students_enrolled);
    body.append("content", data.content);
    body.append("category", data.category);
    body.append("duration",String(data.duration));
    body.append("image",data.image, data.image.name);
    return this.http.post(this.apiUrl+"api/admin/addCourse",body,this.httpOptionsFormData);
  }

  addModule(data:{
    name:string,
    module_name:string,
    video_link:string,
    module_file:any
  }):Observable<any>{
    let body = new FormData();
    body.append("module_name",data.module_name);
    body.append("video_link",data.video_link);
    body.append("name",data.name)
    body.append("module_file",data.module_file, data.module_file.name);
    return this.http.put(this.apiUrl+"api/admin/addModule",body,this.httpOptionsFormData);
  }

  getAllCourses():Observable<any>{
    return this.http.get(this.apiUrl+"api/allCourses", this.httpOptionsUrlEncoded);
  }

  deleteCouse(id:string):Observable<any>{
    return this.http.delete(this.apiUrl+"api/admin/deleteCourse/"+id,this.httpOptionsUrlEncoded);
  }
}
