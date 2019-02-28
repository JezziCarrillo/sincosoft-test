import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { EmployeeAPI, Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'assets/lista.json';
  private employee: Employee = null;

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<EmployeeAPI>(this.employeeUrl).pipe(
      map(data => {
        return Object.keys(data).map(key => {
          const employee = data[key];
          return { ...employee, Id: key };
        });
      }),
    );
  }

  setEmployee(employee: Employee) {
    this.employee = employee;
  }

  getEmployee() {
    return this.employee;
  }
}
