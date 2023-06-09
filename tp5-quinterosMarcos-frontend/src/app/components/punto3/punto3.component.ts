import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Punto3Service } from 'src/app/service/punto3/punto3.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  cambios: string = 'new';
  ticket = new Array();
  espectadores = new Array();

  precioTicket !: number;
  categoria !: string;
  fechaTicket !: string;
  idEspectador !: string;
  idTicket !: string;
  constructor(private punto3Service: Punto3Service, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'].trim()  === ":id") {
        console.log(params['id']);
        console.log(this.cambios);
        this.cambios = "new";
      } else {
        console.log(params['id']);
        this.cambios = "modificar";
        this.idTicket = params['id'];
        console.log(this.idTicket)
        this.obtenerTickets(this.idTicket);
        //this.modificarTicket();
      }
    });

    this.obtenerEspectadores();
  }

  guardarTicket() {
    this.punto3Service.postAltaTicket(this.precioTicket, this.categoria, this.fechaTicket, this.idEspectador).subscribe(
      result => {
        this.ticket = result.result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  obtenerEspectadores() {
    this.punto3Service.getEspectadores().subscribe(
      result => {
        this.espectadores = result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  modificarTicket() {
    this.punto3Service.putModificarTicket(this.idTicket, this.precioTicket, this.categoria, this.fechaTicket, this.idEspectador).subscribe(
      result => {
        this.ticket = result.result;
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

  obtenerTickets(idTick:string) {
    this.punto3Service.getMostrarTickets().subscribe(
      result => {
        this.ticket = result;
        this.ticket.some(id => id === idTick);
        const array = this.ticket.find(item => item._id === idTick);
        console.log(array)
        this.precioTicket = array.precioTicket
        this.categoria  = array.categoriaEspectador;
        this.fechaTicket = array.fechaCompra;
        this.idEspectador = array.espectador._id;
      },
      error => {
        console.log(error);
      }
    )
  }

}
