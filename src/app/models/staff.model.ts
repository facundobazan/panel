import { Area } from './area.enum';
import { PhoneModel } from './phone.model';

export interface StaffModel {
  id?: string;
  firstName: string;
  lastName: string;
  phones: PhoneModel[];
  area: Area;
}
