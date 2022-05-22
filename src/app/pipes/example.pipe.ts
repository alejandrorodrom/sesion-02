import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {

  constructor() {
  }

  transform(value: string, defaultValue: string): string {
    return value ? value : defaultValue;
  }

}
