import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { MembersService } from '../members.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  form !:FormGroup

   constructor(private fb:FormBuilder,
               private membersService:MembersService, 
               private router:Router ){}
   
   ngOnInit(): void {
    this.form = this.fb.group({
      name:['',Validators.required],
      age:['',[Validators.required,Validators.min(16),Validators.max(60)]],
      gender:['',Validators.required],
      phone:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      package:['',Validators.required],     
      trainer:['',Validators.required],
      joiningDate:['',Validators.required], 

    }) 
   }

   get f(){
    return this.form.controls;
   }

   submit(){
    this.membersService.create(this.form.value).subscribe(
      data =>{ this.router.navigateByUrl('members')}
    )
   }  

}
