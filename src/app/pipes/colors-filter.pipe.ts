import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/entities/color';

@Pipe({
  name: 'colorsFilter'
})
export class ColorsFilterPipe implements PipeTransform {

  transform(colors: Color[], filterText:string): Color[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?colors.filter(c=>c.name.toLocaleLowerCase().indexOf(filterText)!==-1):colors
  }

}
