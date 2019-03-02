import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})

export class EmployeesComponent implements OnInit {
  public searchInput = '';
  public employees: Employee[] = [];

  @Input() selected: any;

  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  get filteredEmployees() {
    return this.employees.filter(employee => {
      const searchText = this.searchInput.toLowerCase();
      return (
        employee.Nombres.toLowerCase().includes(searchText) ||
        employee.Apellidos.toLowerCase().includes(searchText) ||
        employee.Documento.toString().includes(searchText)
      );
    });

  }
}