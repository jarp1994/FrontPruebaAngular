import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  cargando = false;
  id:number

  constructor(
     private service: EmployeeDataService,
     private dialog: MatDialog,
     private router: Router
  ) {

  }

  ngOnInit(): void {


  }

  findEmployeeById(){
    if(!this.id){
      this.cargando = true;
      this.router.navigate([`employees`])
      this.cargando = false;
    }

    this.cargando = true;
     this.service.getEmployeeById(this.id).subscribe({next: (response) =>{
      console.log(response)
      if(response){
        this.router.navigate([`employees/employee/${response.employee.id}`])
        this.cargando = false;
      }else{

      }
    },
    error: (err) => {
      this.cargando = false;
      this.openMensaje("Too Many Requests to the API, please wait a few minutes")
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
