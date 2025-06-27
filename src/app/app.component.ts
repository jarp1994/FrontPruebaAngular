import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaTecnicaFront';
}
