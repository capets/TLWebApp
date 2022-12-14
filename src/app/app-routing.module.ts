import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DriversComponent} from "./drivers/drivers.component";
import {TrucksComponent} from "./trucks/trucks.component";
import {TrailsComponent} from "./trails/trails.component";
import {ClientsComponent} from "./clients/clients.component";
import {HomeComponent} from "./home/home.component";
import {RoutesAndOrdersComponent} from "./routes-and-orders/routes-and-orders.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'orders',
    component: RoutesAndOrdersComponent
  },
  {
    path: 'drivers',
    component: DriversComponent
  },
  {
    path: 'trucks',
    component: TrucksComponent
  },
  {
    path: 'trails',
    component: TrailsComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
