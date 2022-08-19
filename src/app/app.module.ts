import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DriversComponent } from './drivers/drivers.component';
import { OrdersComponent } from './orders/orders.component';
import { TrucksComponent } from './trucks/trucks.component';
import { TrailsComponent } from './trails/trails.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    TopbarComponent,
    DriversComponent,
    OrdersComponent,
    TrucksComponent,
    TrailsComponent,
    ClientsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
