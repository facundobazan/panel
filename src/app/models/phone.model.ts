import { TypePhone } from "./type-phone.enum";

export interface PhoneModel{
    id?: number;
    phoneNumber: string;
    typePhone: TypePhone
}