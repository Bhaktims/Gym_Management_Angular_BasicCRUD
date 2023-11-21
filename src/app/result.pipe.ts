import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(n1: number,n2: number ): number {
    return n2 / (n1/100)*2 ;
  }

}
