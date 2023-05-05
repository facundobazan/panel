import { CityModel } from './city.model';

export interface AddressModel {
  id?: number;
  street: string;
  city: CityModel;
}
