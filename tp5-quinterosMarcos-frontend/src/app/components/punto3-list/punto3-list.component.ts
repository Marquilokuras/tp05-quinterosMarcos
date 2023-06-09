import { Component, OnInit } from '@angular/core';
import { Punto3Service } from 'src/app/service/punto3/punto3.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-punto3-list',
  templateUrl: './punto3-list.component.html',
  styleUrls: ['./punto3-list.component.css']
})
export class Punto3ListComponent implements OnInit {

  totalTickets = new Array();
  totalTicketsCategoria = new Array();
  categorias !: string;
  visible: boolean = false;
  visible1: boolean = false;
  eliminado: boolean = false;

  constructor(private punto3Service: Punto3Service, private router: Router) { }

  ngOnInit(): void {
  }

  mostrarTickets() {
    this.punto3Service.getMostrarTickets().subscribe(
      (result) => {
        this.totalTickets = result;
        this.visible = true;
        console.log(this.totalTickets);
      });
  }

  mostrarTicketCategoria() {
    this.punto3Service.getSoloTicketCategoria(this.categorias).subscribe(
      (result) => {
        this.totalTicketsCategoria = result;
        this.visible1 = true;
        console.log(this.totalTicketsCategoria);
      });
  }

  eliminarTicket(idEliminar: string) {
    this.punto3Service.getEliminarTicket(idEliminar).subscribe(
      (result) => {
        this.eliminado = true;
        console.log(result);
      });
  }

  modificarTicket(idModificar: string) {
    this.router.navigate(['punto3', idModificar],);
  }
}
