import { Component, OnInit } from '@angular/core';
import { Punto1Service } from 'src/app/service/punto1/punto1.service';

@Component({
  selector: 'app-punto1-list',
  templateUrl: './punto1-list.component.html',
  styleUrls: ['./punto1-list.component.css']
})
export class Punto1ListComponent implements OnInit {

  productosDestacados = new Array();

  constructor(private punto1Service: Punto1Service) { }

  ngOnInit(): void {
    this.getListarProductosDestacados();
  }

  getListarProductosDestacados(){
    this.punto1Service.getProductosDestacados().subscribe(
      (result) => {
        this.productosDestacados = result
        console.log(this.productosDestacados);
      });
  }

}
