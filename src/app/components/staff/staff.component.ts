import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MaxLengthValidator, MinLengthValidator, RequiredValidator, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { Area } from 'src/app/models/area.enum';
import { TypePhone } from 'src/app/models/type-phone.enum';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  staffForm!: FormGroup;
  readonly typePhoneValues = TypePhone;
  readonly areaValues = Area;

  constructor(private readonly formBuilder: FormBuilder, private readonly staffService: StaffService) {
  }

  ngOnInit() {
    this.staffForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.staffForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      typePhone: [TypePhone.PERSONAL, Validators.required],
      area: [Area.MONITOREO, Validators.required]
    })
  }

  save() {
    this.staffService.save({
      firstName: this.staffForm.get('firstName')?.value,
      lastName: this.staffForm.get('lastName')?.value,
      phones: [{
        phoneNumber: this.staffForm.get('phone')?.value,
        typePhone: this.staffForm.get('typePhone')?.value,
      }],
      area: this.staffForm.get('area')?.value
    })
  }
}
