import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto3Service {

  constructor(private _http: HttpClient) { }

  //Tickets Vendidos
  public getMostrarTickets(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/ticket";

    return this._http.get(url, httpOptions);
  }

  public getEliminarTicket(idTicket: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/ticket/" + idTicket;

    return this._http.delete(url, httpOptions);
  }

  public getSoloTicketCategoria(categoria: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/ticket/categoria?categoriaEspectador=" + categoria;

    return this._http.get(url, httpOptions);
  }

  //Dar de Alta y Modificar

  public postAltaTicket(precio: number, categoria: string, fecha: string, idEspectador: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    const data = {
      'precioTicket': precio,
      'categoriaEspectador': categoria,
      'fechaCompra': fecha,
      'espectador': idEspectador
    };

    var url = "http://localhost:3000/api/ticket";

    return this._http.post(url, data, httpOptions);
  }

  public putModificarTicket(idTicket: string, precioTicket: number, categoria: string, fechaTicket: string, idEspectador: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    const data = {
      'precioTicket': precioTicket,
      'categoriaEspectador': categoria,
      'fechaCompra': fechaTicket,
      'espectador': idEspectador
    };

    var url = "http://localhost:3000/api/ticket/" + idTicket;

    return this._http.put(url, data, httpOptions);
  }

  //Obtener todos los Espectadores

  public getEspectadores(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/espectador";

    return this._http.get(url, httpOptions);
  }

}
