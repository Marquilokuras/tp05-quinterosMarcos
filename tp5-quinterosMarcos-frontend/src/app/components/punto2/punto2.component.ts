import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Punto2Service } from 'src/app/service/punto2/punto2.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  cantidadOrigen !: string;
  monedaOrigen !: string;
  monedaDestino !: string;
  cantidadDestino !: string;
  montoTabla: string = "";
  emailCliente !: string;
  tasaConversion !: number;
  resultado !: string;
  filas = new Array<Array<string>>();
  columnas = new Array<Array<string>>();

  constructor(private punto2Service: Punto2Service) {
  }

  ngOnInit(): void {
    this.obtenerTabla();

  }

  obtenerConversion() {
    this.punto2Service.postPuntoa(this.monedaOrigen, this.cantidadOrigen, this.monedaDestino).subscribe(
      result => {
        this.resultado = result.result;


        this.punto2Service.postAltaTransaccion(this.monedaOrigen, this.monedaDestino, this.cantidadOrigen,this.resultado, this.emailCliente).subscribe(
          result => {
            this.cantidadDestino = result.result;

            console.log(result);
          },
          error => {
            console.log(error);
          }
        )
      },
      error => {
        console.log(error);
      }
    )
  }

  async obtenerTabla() {
    var paisesA = ["USD", "EUR", "ARS"]
    var paisesB = ["USD", "EUR", "ARS"]
    for (var i = 0; i < paisesA.length; i++) {
      var columna = new Array<string>()
      for (var j = 0; j < paisesB.length; j++) {
        await lastValueFrom(this.punto2Service.getTablaMoneda(paisesA[i], paisesB[j], "1")).then(
          result => {
            console.log(result);
            columna.push(result.new_amount);
          },
          error => {
            console.log(error);
          }
        )
      }
      this.filas.push(columna)
    }

    console.log(this.filas);

    for (var i = 0; i < paisesA.length; i++) {
      var fila = new Array<string>()
      for (var j = 0; j < paisesB.length; j++) {
        await lastValueFrom(this.punto2Service.getTablaMoneda(paisesA[j], paisesB[i], "1")).then(
          result => {
            console.log(result);
            fila.push(result.new_amount);
          },
          error => {
            console.log(error);
          }
        )
      }
      this.columnas.push(fila)
    }
  }

}
