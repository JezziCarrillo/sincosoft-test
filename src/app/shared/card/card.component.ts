import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  public employee: Employee;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
  ) {}

  showEmployee() {
    this.employeeService.setEmployee(this.employee);
    this.router.navigate(['/details']);
  }
}
