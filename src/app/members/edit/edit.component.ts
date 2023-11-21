import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MembersService } from '../members.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Members } from '../members';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form !:FormGroup
  id !: number
  members !: Members

  constructor(private fb:FormBuilder,
              private membersService:MembersService, 
              private router:Router,
              private route:ActivatedRoute ){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
     this.membersService.find(this.id).subscribe(data =>{
      this.members = data
     })


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
   this.membersService.update(this.id,this.form.value).subscribe(
     data =>{ this.router.navigateByUrl('members')}
   )
  }  


}
