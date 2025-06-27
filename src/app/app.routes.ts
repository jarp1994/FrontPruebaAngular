import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeInfoComponent } from './employees/employee-info/employee-info.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'employees/employee/:id',
    component: EmployeeInfoComponent
  }
];
