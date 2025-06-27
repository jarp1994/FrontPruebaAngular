import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_EMPLEADOS } from '../app.constants';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  apiEmpleados = `${API_URL_EMPLEADOS}/employees`


  getAllEmployees(){
    return this.http.get<any>(`${this.apiEmpleados}/lista`)
  }

  getEmployeeById(id:number){
    return this.http.get<any>(`${this.apiEmpleados}/employee/${id}`)
  }
}
