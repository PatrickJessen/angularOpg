import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { CarData } from '../Interfaces/car-data';

@Injectable({
  providedIn: 'root'
})
export class RestApiServiceService {
  url: string = "http://localhost:4200"
  constructor(private http: HttpClient) { }


  GetAllCars(): Observable<CarData[]> {
    return this.http.get<CarData[]>(this.url+'/Cars/GetAll');
  }

  GetCar(model: string): Observable<CarData> {
    const url = this.url + `/Cars/Get?model=${model}`;
    return this.http.get<CarData>(url);
  }

  DeleteCar(model: string): Observable<string> {
    const url = this.url + `/Cars/Delete?model=${model}`;
    return this.http.delete<string>(url);
  }

  AddCar(rankform: number, modelform:string, quantityform: number, changeQuantityPercentform: number) : Observable<string>
  {
    const url = this.url + `/Cars/Add?rank=${rankform}&model=${modelform}&quantity=${quantityform}&changeQuantity=${changeQuantityPercentform}`;
    return this.http.post<string>(url,'');
  }

  EditCar(rankform: number, modelform:string, quantityform: number, changeQuantityPercentform: number) : Observable<string>
  {
    const url = this.url + `Update?rank=${rankform}&model=${modelform}&quantity=${quantityform}&changeQuantity=${changeQuantityPercentform}`;
    return this.http.post<string>(url, '');
  }
}