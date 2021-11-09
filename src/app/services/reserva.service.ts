import { Reserva } from './../Components/interface/reserva';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  baseUrl = "http://localhost:3001/reserva"



  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(this.baseUrl, reserva)
  }


  read(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.baseUrl)

  }

  readById(id: String): Observable<Reserva> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Reserva>(url)
}

  update(reserva: Reserva): Observable<Reserva> {
    const url = `${this.baseUrl}/${reserva.id}`
    return this.http.put<Reserva>(url, reserva)
  }

  delete(id: number): Observable<Reserva> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Reserva>(url)
  }
}
