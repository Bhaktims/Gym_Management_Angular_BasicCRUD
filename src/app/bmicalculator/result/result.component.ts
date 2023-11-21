import { Component,OnInit,OnChanges,Input,Output,EventEmitter, EnvironmentInjector, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit,OnChanges {

  @Input()
  num1 !: number;

  @Input()
  num2 !: number;

  result = 0

  @Output()
  resultEmitter = new EventEmitter<string>();

  ngOnInit(): void {

    this.result = 0 ;
  }


  ngOnChanges(): void {
    
    this.result = this.num2 / (this.num1 * this.num1)    
    this.resultEmitter.emit("result = "+this.result)
  }

}
