import { Component } from '@angular/core';

@Component({
  selector: 'app-bmicalculator',
  templateUrl: './bmicalculator.component.html',
  styleUrls: ['./bmicalculator.component.css']
})
export class BmicalculatorComponent {

  n1 !: number;
  n2 !: number;


  getResult(event:string){
    console.log("In parent "+event)
  }

}
