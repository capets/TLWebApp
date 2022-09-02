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
import { FormsModule } from "@angular/forms";
import { TruckEditorServiceComponent } from './shared/Services/trucks/truck-editor-service-component';
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TrailEditorServiceComponent } from './shared/Services/trails/trail-editor-service-component';
import { DeleteModalServiceComponent } from "./shared/Services/base/delete-modal-service";
import { ValidationSummaryComponent } from './shared/Validation/validation-summary/validation-summary.component';
import { ValidationModelDirective } from './shared/Validation/validation-summary/validation-model.directive';
import { DriverEditServiceComponent } from './shared/Services/drivers/driver-edit-service.component';

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
    HomeComponent,
    TruckEditorServiceComponent,
    TrailEditorServiceComponent,
    DeleteModalServiceComponent,
    ValidationSummaryComponent,
    ValidationModelDirective,
    DriverEditServiceComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BsDatepickerModule,
        BrowserAnimationsModule,
        ModalModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
