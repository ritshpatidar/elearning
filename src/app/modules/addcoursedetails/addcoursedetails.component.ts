import { Component, OnInit,  Input } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms' 
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-addcoursedetails',
  templateUrl: './addcoursedetails.component.html',
  styleUrls: ['./addcoursedetails.component.css']
})
export class AddcoursedetailsComponent implements OnInit {

  AddModuleForm: FormGroup; 

  constructor(private fb:FormBuilder, private router : ActivatedRoute) {

    this.AddModuleForm = this.fb.group({  
      modulename: '',  
      links: this.fb.array([]) ,  
    });  
    
  } 

  ngOnInit(): void {
      console.log(this.router.snapshot.params)
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
     
  onSubmit() {  
    console.log(this.AddModuleForm.value);  
  } 
    
}

