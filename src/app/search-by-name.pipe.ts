import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {
  transform(value: any[], args: any) {
    args = args.toLowerCase();
    return args
      ? value.filter((x) => x.Name.toLowerCase().indexOf(args) >= 0)
      : value;
  }
}
