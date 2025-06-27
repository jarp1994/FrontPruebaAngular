import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDataService } from '../../service/employee-data.service';
import { MensajeComponent } from '../../mensaje/mensaje.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-info',
  imports: [CommonModule],
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.css'
})
export class EmployeeInfoComponent implements OnInit {

  empleado: Empleado
  id:number
  cargando: boolean
  constructor(
     private route: ActivatedRoute,
     private service: EmployeeDataService,
     private dialog: MatDialog
  ){

  }

  ngOnInit(): void {
    this.cargando = true;

    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      console.log(this.id)

      this.service.getEmployeeById(this.id).subscribe({next: (response) =>{
      console.log(response)
        this.empleado = response.employee
        console.log(this.empleado )
        this.cargando = false;
    },
    error: (err) => {
      this.cargando = false;
      this.openMensaje("Too Many Requests to the API, please wait a few minutes")
    }
  })
    });

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
