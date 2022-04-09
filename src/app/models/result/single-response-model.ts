import { ResponseModel } from './response_model';
export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}