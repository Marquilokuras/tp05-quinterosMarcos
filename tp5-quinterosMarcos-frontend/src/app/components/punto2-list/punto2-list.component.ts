import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { Punto2Service } from 'src/app/service/punto2/punto2.service';

@Component({
  selector: 'app-punto2-list',
  templateUrl: './punto2-list.component.html',
  styleUrls: ['./punto2-list.component.css']
})
export class Punto2ListComponent implements OnInit {

  monedaOrigen !: string;
  monedaDestino !: string;

  totalTransacciones = new Array();
  totalTransaccionesOrigenDestino = new Array();

  visible: boolean = false;
  visible1 : boolean = false;

  constructor(private punto2Service: Punto2Service) { }

  ngOnInit(): void {
  }

  mostrarTransacciones() {
    this.punto2Service.getMostrarTransaccionesTodas().subscribe(
      (result) => {
        this.totalTransacciones = result;
        this.visible = true;
        console.log(this.totalTransacciones);
      });
  }

  mostrarOrigenDestinoTransacciones() {
    console.log(this.monedaOrigen)
    console.log(this.monedaDestino)
    this.punto2Service.getMostrarTransaccionesOrigenDestino(this.monedaOrigen,this.monedaDestino).subscribe(
      (result) => {
        this.totalTransaccionesOrigenDestino  = result;
        this.visible1 = true;
        console.log(this.totalTransaccionesOrigenDestino );
      });
  }
}
