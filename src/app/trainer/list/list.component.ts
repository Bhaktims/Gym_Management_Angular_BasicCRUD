import { Component,OnInit,OnDestroy } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { Trainer } from '../trainer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit , OnDestroy {

  imgStyle={
    'width.px':300,
    'height.px':250,
  }

  trainers:Trainer[] = []

  subscription !: Subscription

  constructor(private trainerService: TrainerService){}
  
  ngOnInit(): void {

    this.subscription=this.trainerService.getAll().subscribe(data =>{
      this.trainers = data
    })
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  deletetrainers(id:number){
    this.trainerService.delete(id).subscribe(data=>{
      this.subscription = this.trainerService.getAll().subscribe(data =>{
        this.trainers = data
      }) 
    })
  }

}
