import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
   form !:FormGroup

   constructor(private fb:FormBuilder,
               private trainerService:TrainerService,
               private router:Router){}
   
   ngOnInit(): void {
    this.form = this.fb.group({

      image:['',Validators.required],
      name:['',Validators.required],
      age:['',[Validators.required,Validators.min(16)]],
      gender:[' ',Validators.required],
      phone:['',Validators.required],
      experience:['',Validators.required],
      availability:['',Validators.required]
      
    })  
   }

   get f(){
    return this.form.controls;
  }

  submit(){
    this.trainerService.create(this.form.value).subscribe(
      data =>{ this.router.navigateByUrl('trainers')}
    )
   }  
}
