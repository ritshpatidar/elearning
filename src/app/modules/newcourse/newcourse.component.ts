import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'  
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/dashboard_service/app.service';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrls: ['./newcourse.component.css']
})
export class NewcourseComponent implements OnInit {


   constructor(private fb:FormBuilder, private appService: AppService, private dialog: MatDialog) {  
     
    this.AddCourseForm = this.fb.group({  
      coursename: '',   
      img: new FormControl('', [Validators.required]),
      duration:'',
      type:''
    });  
  }  

  ngOnInit(): void {
  }

  AddCourseForm: FormGroup;
  fileToUpload: File | null = null;  
     
    
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
  
  handleFileInput(e: Event) {
    this.fileToUpload = (<HTMLInputElement>e.target)!.files![0];
  }
     
  onSubmit() {  
    console.log(this.AddCourseForm.value);

    const data = {
      active: true,
      name: this.AddCourseForm.value.coursename,
      category:this.AddCourseForm.value.type,
      duration:this.AddCourseForm.value.duration,
      image:this.fileToUpload,
      students_enrolled:JSON.stringify([]),
      content:JSON.stringify([])
    }
    
    this.appService.addCourse(data).subscribe(responseData => {
      console.log("Response Here");
      console.log(responseData);
      if(responseData.success){
        //close pop up
        this.dialog.closeAll();
        alert("Course created successfully");
      } else {
        alert("Something went wrong");
      }
    }, err=>{
      console.log("Error occured");
      alert("Something went wrong");
      console.log(err);
    });;
  }  

}

