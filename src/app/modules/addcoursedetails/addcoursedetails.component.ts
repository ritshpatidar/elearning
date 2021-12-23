import { Component, OnInit,  Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms' 
import { ActivatedRoute } from '@angular/router'; 
import { AppService } from 'src/app/dashboard_service/app.service';
import { GlobalConstants } from 'src/app/global-constants';

@Component({
  selector: 'app-addcoursedetails',
  templateUrl: './addcoursedetails.component.html',
  styleUrls: ['./addcoursedetails.component.css']
})
export class AddcoursedetailsComponent implements OnInit {

  AddModuleForm: FormGroup; 
  course_name:string = "";
  fileToUpload: File | null = null;  
  gridColumns = 3;
  modules = [
    {module_name:"Loading", video_link:"ZgMw__KdjiI", module_file:""},
  ]
  moduleLoaded = false;
  apiUrl = GlobalConstants.apiURL;

  constructor(private fb:FormBuilder, private router : ActivatedRoute, private appService: AppService) {

    this.AddModuleForm = this.fb.group({  
      modulename: '',  
      linkname: '',  
    });  
    
  } 

  ngOnInit(): void {
      console.log(this.router.snapshot.params);
      this.course_name = this.router.snapshot.params['name'];
      this.getCourse(this.router.snapshot.params['name']);
  }

  getCourse(course_name: string){
    this.appService.getCourse(course_name).subscribe((res)=>{
      console.log("Response Here");
      console.log(res);
      if(res.success){
        //Do things
        this.modules = res.result.content;
        this.moduleLoaded = true;
      } else {
        alert("Something went wrong");
      }
    });
  }

  handleFileInput(e: Event) {
    this.fileToUpload = (<HTMLInputElement>e.target)!.files![0];
  }

  links() : FormArray {  
    return this.AddModuleForm.get("links") as FormArray  
  }  
     
  newLink(): FormGroup {  
    return this.fb.group({  
      linkname: '',  
    })  
  }  
     
  addLink() {  
    this.links().push(this.newLink());  
  }  
     
  removeLink(i:number) {  
    this.links().removeAt(i);  
  }  

   toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }
     
  onSubmit() {  
    console.log(this.AddModuleForm.value);  
    let data = {
      name: this.course_name,
      video_link: this.AddModuleForm.value.linkname,
      module_name: this.AddModuleForm.value.modulename,
      module_file: this.fileToUpload
    }

    this.appService.addModule(data).subscribe((res)=>{
      console.log("Response Here");
      console.log(res);
      if(res.success){
        //close pop up
        this.getCourse(this.course_name);
        alert("Module created successfully");
      } else {
        alert("Something went wrong");
      }
    });
  } 
    
}

