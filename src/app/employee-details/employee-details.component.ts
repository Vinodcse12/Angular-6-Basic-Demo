import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  empDetailsForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.empDetailsForm = new FormGroup({
      'employeename': new FormControl('', Validators.required),
      'employeepassword': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl('male')
    })
  }

}
