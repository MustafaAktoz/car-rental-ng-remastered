import { Brand } from 'src/app/models/entities/brand';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandsFilter'
})
export class BrandsFilterPipe implements PipeTransform {

  transform(brands: Brand[], filterText:string): Brand[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?brands.filter(b=>b.name.toLocaleLowerCase().indexOf(filterText)!==-1):brands
  }

}
