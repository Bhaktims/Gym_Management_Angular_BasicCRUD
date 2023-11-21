import { Component,OnInit,OnDestroy } from '@angular/core';
import { Members } from '../members';
import { MembersService } from '../members.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit , OnDestroy {

 members:Members[]=[]

 subscription !:Subscription

 constructor(private membersService:MembersService){}
 
 ngOnInit(): void {
  this.subscription = this.membersService.getAll().subscribe(data =>{
    this.members = data
  }) 
 }

 ngOnDestroy(): void {
   
   this.subscription.unsubscribe()
 
  }

  deletemembers(id:number){
    this.membersService.delete(id).subscribe(data=>{
      this.subscription = this.membersService.getAll().subscribe(data =>{
        this.members = data
      }) 
    })
  }


  }
