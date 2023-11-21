import { Component,OnInit } from '@angular/core';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id !:number
  trainer !: Trainer

  constructor(private trainerService:TrainerService,
              private route:ActivatedRoute){}

 ngOnInit(): void {
     this.id = this.route.snapshot.params['id']
     this.trainerService.find(this.id).subscribe(data =>{
      this.trainer = data
     })
      
 }

}
