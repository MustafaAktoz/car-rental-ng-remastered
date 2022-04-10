import { CarDetailDTO } from 'src/app/models/entities/dtos/car-detail-dto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carDetailsFilter'
})
export class CarDetailsFilterPipe implements PipeTransform {

  transform(carDetailDTOs: CarDetailDTO[], filterText: string): CarDetailDTO[] {
    filterText=filterText?filterText.toLocaleLowerCase():filterText
    return filterText?carDetailDTOs.filter(cd=>cd.name.toLocaleLowerCase().indexOf(filterText)!==-1):carDetailDTOs
  }

}
