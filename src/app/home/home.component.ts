import { Component, OnInit } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [EmployeesComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

  }

}
