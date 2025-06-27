import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { Empleado } from '../models/empleado.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MensajeComponent } from '../mensaje/mensaje.component';

@Component({
  selector: 'app-employees',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {

  employees: Empleado[]
  anualSalary: number[]
  cargando:boolean
  constructor(
    private service: EmployeeDataService,
     private dialog: MatDialog
  ){

  }

  ngOnInit(): void {
    this.cargando = true;

    this.service.getAllEmployees().subscribe({next: (response) =>{
      this.employees = response.employees
      this.anualSalary = response.anualSalary
      this.cargando = false;
    },
    error: (err) => {
      this.cargando = false;
      this.openMensaje("Too Many Requests to the API, pleasw wait a few minutes")
    }
  })

  }

  openMensaje(mensajeT: string, openD?: string): void {
    let screenWidth = screen.width;
    let anchoDialog: string = '500px';
    let anchomax: string = '80vw';
    let altoDialog: string = '250';
    if (screenWidth <= 600) {
      anchoDialog = '100%';
      anchomax = '100%';
      altoDialog = 'auto';
    }
    const dialogRef = this.dialog.open(MensajeComponent, {
      width: anchoDialog,
      maxWidth: anchomax,
      height: altoDialog,
      data: {
        mensaje: mensajeT
      }
    });
  }

}
