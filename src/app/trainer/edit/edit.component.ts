import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from '../trainer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form !:FormGroup
  id !: number
  trainer !: Trainer
  
   constructor(private fb:FormBuilder,
               private trainerService:TrainerService,
               private router:Router,
               private route:ActivatedRoute
               ){}
   
   ngOnInit(): void {
      this.id = this.route.snapshot.params['id']
      
      this.trainerService.find(this.id).subscribe(data =>{
      this.trainer = data
     })

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
    this.trainerService.update(this.id,this.form.value).subscribe(
      data =>{ this.router.navigateByUrl('trainers')}
    )
   }  


     


}
