import {AfterViewInit, Component, Injectable, OnInit} from '@angular/core';
import {EditModalService} from "../base/edit-modal-service";
import {Order} from "../../Models/Order";
import {OrdersService} from "./orders-service";
import {DatePickerConfig} from "../../Helpers/date-picker-config";
import {BsLocaleService} from "ngx-bootstrap/datepicker";
import {BsModalService} from "ngx-bootstrap/modal";
import {Client} from "../../Models/Client";
import {ClientsService} from "../clients/clients-service";
import {ExportersService} from "../clients/exporters-service";
import {RecipientsService} from "../clients/recipients-service";
import {Route} from "../../Models/Route";
import {RoutesService} from "../routes/routes-service";
import {OrderCategoriesService} from "./order-categories-service";
import {OrderCategory} from "../../Models/OrderCategory";
import {ValidationHelper} from "../../Helpers/validation-helper";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-order-edit-service',
  templateUrl: './order-edit-service.component.html',
  styleUrls: ['./order-edit-service.component.scss']
})
export class OrderEditServiceComponent extends EditModalService<Order> implements AfterViewInit{
  clients!: Client[];
  exporters!: Client[];
  recipients!: Client[];
  routes!: Route[];
  categories!: OrderCategory[];
  constructor(private ordersService: OrdersService,
              private clientsService: ClientsService,
              private exportersService: ExportersService,
              private recipientsService: RecipientsService,
              private orderCategoriesService: OrderCategoriesService,
              private routesService: RoutesService,
              private datePickerConf: DatePickerConfig,
              private localeService: BsLocaleService,
              private modalService: BsModalService,
              public validationHelper: ValidationHelper) {
    super(ordersService, datePickerConf, localeService, modalService );
  }

  showModal(): void {
    this.modalService.show(OrderEditServiceComponent, {class: 'modal-lg'});
  }

  ngAfterViewInit(): void {
    this.clients = this.clientsService.GetAll();
    this.exporters = this.exportersService.GetAll();
    this.recipients = this.recipientsService.GetAll();
    this.routes = this.routesService.GetAll()
      .filter(x => this.isRouteClosed() || x.statusId === 1);
    this.categories = this.orderCategoriesService.GetAll();
  }

  isRouteClosed():boolean{
    return this.model.route?.statusId === 2;
  }
}
