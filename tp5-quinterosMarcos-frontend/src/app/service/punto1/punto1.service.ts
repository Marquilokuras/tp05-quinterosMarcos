import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto1Service {

  constructor(private _http: HttpClient) { }

  public postAltaProducto(nombreProducto: string, descripcionProducto: string, imagenProducto: string, precioProducto: number, stockProducto: number, destacadoProducto: boolean): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    const data = {

      'nombre': nombreProducto,
      'descripcion': descripcionProducto,
      'imagen': imagenProducto,
      'precio': precioProducto,
      'stock': stockProducto,
      'destacado': destacadoProducto
    };

    var url = "http://localhost:3000/api/producto";

    return this._http.post(url, data, httpOptions);
  }

  public getProductosDestacados(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/producto/destacado";

    return this._http.get(url, httpOptions);
  }
}
