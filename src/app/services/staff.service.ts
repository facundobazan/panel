import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StaffModel } from '../models/staff.model';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private readonly httpClient: HttpClient) {}

  save(staff: StaffModel): void {
    this.httpClient.post('https://panel-f5a45-default-rtdb.firebaseio.com/staff.json', staff).subscribe(
      res=>console.info("data saved"),
      err=>console.error(err)
    );
  }
}
