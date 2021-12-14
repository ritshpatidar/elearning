import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'  

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {
  

   constructor(private fb:FormBuilder, private http: HttpClient) {  
     
    this.AddCourseForm = this.fb.group({  
      name: '',  
      courses: this.fb.array([]) , 
      file: new FormControl('', [Validators.required]),
      fileSource: new FormControl('', [Validators.required]) 
    });  
  }  

  ngOnInit(): void {
  }

  AddCourseForm: FormGroup;  
     
    
  courses() : FormArray {  
    return this.AddCourseForm.get("courses") as FormArray  
  }  
     

  newCourse(): FormGroup {  
    return this.fb.group({  
      address:'' ,
    })  
  }  


     
  addCourse() {  
    this.courses().push(this.newCourse());  
  }  
     
  removeCourse(i:number) {  
    this.courses().removeAt(i);  
  }  
     
  onSubmit() {  
    console.log(this.AddCourseForm.value);  
  }  

}

