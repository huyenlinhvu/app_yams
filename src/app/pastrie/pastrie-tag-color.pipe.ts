import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastrieTagColor'
})
export class PastrieTagColorPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(tag: string): string {
      let color: string;
      switch(tag) {
        case 'sucré':
          color = "bg-sucre";
          break;
        case 'yummy':
          color = "bg-yummy";
          break;
        case 'chocolat':
          color = "bg-chocolat";
          break;
        case 'dessert':
          color = "bg-dessert";
          break;
        case 'framboise':
          color = "bg-framboise";
          break;
        case 'bananes':
          color = "bg-banane";
          break;
        default:
          color = "bg-default";
          break;
      }
      return color;
  }
  
}
