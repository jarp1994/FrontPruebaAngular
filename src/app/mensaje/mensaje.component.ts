import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css'],
  standalone: false
})
export class MensajeComponent implements OnInit {

  mensaje: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<MensajeComponent>
  ) { }

  ngOnInit(): void {

    this.mensaje = this.data.mensaje;
  }

   confirmar() {
    this.dialogRef.close(true);
  }

  cancelar() {
    this.dialogRef.close(false);
  }

  cerrar() {
    this.dialogRef.close();
  }

}
