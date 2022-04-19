import { CarImage } from './../car-image';
export interface CarDetailDTO{
    id:number
    name:string
    brandName:string
    colorName:string
    modelYear:number
    dailyPrice:number
    description:string
    findeksPoint:number
    carImages:CarImage[]
}