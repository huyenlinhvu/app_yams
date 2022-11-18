import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pastrieTypeColor'
})
export class PastrieTypeColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
