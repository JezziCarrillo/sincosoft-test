import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Location } from '@angular/common';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent {
  public employee: Employee;

  constructor(
    private location: Location,
    private employeeService: EmployeeService,
  ) {
    this.employee = this.employeeService.getEmployee();
  }

  backClicked() {
    this.location.back();
  }
}
