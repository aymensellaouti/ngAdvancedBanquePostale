import { Pipe, PipeTransform } from '@angular/core';
import memo from "memo-decorator";
@Pipe({
  name: 'carre',
})
export class CarrePipe implements PipeTransform {
  transform(value: number): number {
    return this.carre(value);
  }
  @memo()
  carre(x: number) {
    const result = x * x;
    console.log(x, result);
    return result;
  }
}
