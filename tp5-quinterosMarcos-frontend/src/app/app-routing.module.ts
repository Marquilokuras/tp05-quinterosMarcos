import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto1ListComponent } from './components/punto1-list/punto1-list.component';
import { Punto2ListComponent } from './components/punto2-list/punto2-list.component';
import { Punto3ListComponent } from './components/punto3-list/punto3-list.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';

const routes: Routes = [
  {path: 'punto1', component: Punto1Component },
  {path: 'punto1-list', component: Punto1ListComponent  },
  {path: 'punto2', component: Punto2Component },
  {path: 'punto2-list', component: Punto2ListComponent  },
  {path: 'punto3', component: Punto3Component },
  {path: 'punto3-list', component: Punto3ListComponent },
  {path: 'punto3/:id', component: Punto3Component },  {path: 'punto3-list', component: Punto3ListComponent  },
  {path: '**', pathMatch:'full',redirectTo:'punto1' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
