import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto2Service {

  constructor(private _http: HttpClient) { }

  public postPuntoa(desde : string, cantidad : string, hasta : string): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '4e47861337mshe1f0ee70eec1fbfp1dc9ecjsn6a3497c7eefc',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      }),
    };

    var url = "https://community-neutrino-currency-conversion.p.rapidapi.com/convert";

    url += "?from-value="+cantidad;
    url += "&from-type="+desde;
    url += "&to-type="+hasta;


    return this._http.post(url,"", httpOptions);
  }

  public postAltaTransaccion(monedaOrigen: string, monedaDestino: string, cantidadOrigen: string,cantidadDestino : string, emailCliente : string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    const tasaConversion =  parseFloat(cantidadOrigen) /parseFloat(cantidadDestino) ;

    const data = {
      'monedaOrigen': monedaOrigen,
      'cantidadOrigen': cantidadOrigen,
      'monedaDestino': monedaDestino,
      'emailCliente': emailCliente,
      'tasaConversion': tasaConversion
    };

    var url = "http://localhost:3000/api/transaccion";

    return this._http.post(url, data, httpOptions);
  }

  public getTablaMoneda(desdeTabla : string,  hastaTabla : string, montoTabla : string): Observable<any> {
    
    const httpOptions = {
      headers: new HttpHeaders({

       // 'X-RapidAPI-Key': '7ec67eb2d0msh43f92748b398b96p1ea4a3jsnefc96ab50089',
        'X-RapidAPI-Key': '116ea1d964mshabf5fa2c35a324cp1d1301jsn47270b9787e0',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
      }),
    };

    var url = "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have="+desdeTabla+"&want="+hastaTabla+"&amount="+montoTabla;


    return this._http.get(url, httpOptions);
  }

  public getMostrarTransaccionesTodas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/transaccion";

    return this._http.get(url, httpOptions);
  }

  public getMostrarTransaccionesOrigenDestino(origen : string, destino:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/transaccion/divisas?origen="+origen+"&destino="+destino;

    return this._http.get(url, httpOptions);
  }
}
