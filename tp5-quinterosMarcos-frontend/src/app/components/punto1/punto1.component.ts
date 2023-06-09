import { Component, OnInit } from '@angular/core';
import { Punto1Service } from 'src/app/service/punto1/punto1.service';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  
  nombreProducto !: string;
  descripcionProducto !: string;
  imagenProducto!: string;
  precioProducto !: number;
  stockProducto !:number;
  destacadoProducto !: boolean;
  guardar : boolean = false;

  cambios : string = "new";
  producto = new Array();
  
  constructor(private punto1Service: Punto1Service) { }

  ngOnInit(): void {
  }

  public altaProductos() {
    console.log(this.nombreProducto,this.descripcionProducto,this.imagenProducto,this.precioProducto,this.stockProducto,this.destacadoProducto)
    this.punto1Service.postAltaProducto(this.nombreProducto,this.descripcionProducto,this.imagenProducto,this.precioProducto,this.stockProducto,this.destacadoProducto).subscribe(
      (result) => {
        this.producto = result
        this.guardar = true;
        console.log(this.producto);
      });
  }

}
