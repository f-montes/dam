import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elevar'
})
export class NombrePipe implements PipeTransform {

  transform(value: number,exponente?:number): number {
    return Math.pow(value, isNaN(exponente)?1:exponente);
    return null;
  }

}
