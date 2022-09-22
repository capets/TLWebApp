import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Route} from "../shared/Models/Route";
import {Order} from "../shared/Models/Order";
import {OrderDeleteService} from "../shared/Services/orders/order-delete-service";
import {OrdersService} from "../shared/Services/orders/orders-service";
import {OrderEditServiceComponent} from "../shared/Services/orders/order-edit-service.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders!: Order[];
  selectedRouteId: number = 0;
  selectedOrderId: number = 0;
  selectedRoute?: Route;
  @Input() onRouteSelected!: EventEmitter<Route>;
  constructor(private ordersService: OrdersService,
              private orderEditService: OrderEditServiceComponent,
              private orderDeleteService: OrderDeleteService) {
    this.onRouteSelected = new EventEmitter<Route>();
  }

  ngOnInit(): void {
    this.onRouteSelected
      .subscribe(x => {
        this.selectedRouteId = x ? x.id : 0;
        this.selectedRoute = x;
        this.refreshOrders();
      });
  }

  private refreshOrders(){
    this.orders = this.ordersService.GetAll()
      .filter(x => x.routeId === this.selectedRouteId)
  }

  onEditClick(order: Order) {
    this.selectedOrderId = order.id;
    this.ordersService.activeModel = Object.assign(new Order(), order);
    this.orderEditService.edit().subscribe(x => this.afterEdit());
  }

  onDelete(order: Order) {
    this.ordersService.activeModel = order;
    this.orderDeleteService
      .delete('Eliminare comanda', `Esti sigur ca doresti sa elimini comanda<br>${order.orderNumber}?`)
      .subscribe(x => this.refreshOrders());
  }

  onAddClick() {
    this.ordersService.activeModel = new Order();
    this.ordersService.activeModel.routeId = this.selectedRouteId;
    this.ordersService.activeModel.orderDate = new Date();
    this.orderEditService.edit().subscribe(x => this.afterEdit());
  }

  private afterEdit():void{
    this.selectedOrderId = 0;
    this.refreshOrders();
  }
}
