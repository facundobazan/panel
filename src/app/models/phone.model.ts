import { TypePhoneModel } from "./type-phone.model";

export interface PhoneModel{
    id?: number;
    number: number;
    typePhone: TypePhoneModel
}