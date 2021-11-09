import { ReservaDeleteComponent } from './reserva-delete/reserva-delete.component';


import { ReservaComponent } from './reserva/reserva.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ReservaUpdateComponent } from './reserva-update/reserva-update.component';




const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'reserva', component: ReservaComponent},
  { path: 'update-reserva/:id', component: ReservaUpdateComponent},
  { path: 'delete-reserva/:id', component: ReservaDeleteComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
