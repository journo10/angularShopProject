import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value + (value * rate) / 100;
  }

  //rate => kdv oranı, value => Ürünün fiyatı

}
