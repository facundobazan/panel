import { PhoneModel } from './phone.model';

export interface StaffModel {
  id?: string;
  firstName: string;
  lastName: string;
  phones: PhoneModel[];
  MainPhoneId: number;
}
