import { ResponseModel } from './response_model';
export interface ListResponseModel<T> extends ResponseModel{
    data:T[]
}