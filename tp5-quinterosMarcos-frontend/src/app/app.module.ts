import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1ListComponent } from './components/punto1-list/punto1-list.component';
import { Punto2ListComponent } from './components/punto2-list/punto2-list.component';
import { Punto3ListComponent } from './components/punto3-list/punto3-list.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Punto1Component,
    FooterComponent,
    Punto1ListComponent,
    Punto2ListComponent,
    Punto3ListComponent,
    Punto2Component,
    Punto3Component
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

