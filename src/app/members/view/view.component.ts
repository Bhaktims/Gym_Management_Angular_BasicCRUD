import { Component,OnInit } from '@angular/core';
import { Members } from '../members';
import { MembersService } from '../members.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id !:number
  members !: Members

  constructor(private membersService:MembersService,
              private route:ActivatedRoute){}

 ngOnInit(): void {
     this.id = this.route.snapshot.params['id']
     this.membersService.find(this.id).subscribe(data =>{
      this.members = data
     })
      
 }

}
