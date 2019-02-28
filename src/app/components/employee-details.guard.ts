import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsGuard implements CanActivate {
  constructor(
    private router: Router,
    private employeeService: EmployeeService,
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const employee = this.employeeService.getEmployee();

    if (!employee) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
