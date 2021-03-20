import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'project24'
})
export class Project24Pipe implements PipeTransform {

  transform(value: string, first:'string'): string {
    return first;
  }

}
