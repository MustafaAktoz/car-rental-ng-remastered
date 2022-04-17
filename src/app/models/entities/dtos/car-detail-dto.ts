import { CarImage } from './../car-image';
export interface CarDetailDTO{
    id:number
    name:string
    brandName:string
    colorName:string
    modelYear:string
    dailyPrice:number
    description:string
    findeksPoint:number
    carImages:CarImage[]
}