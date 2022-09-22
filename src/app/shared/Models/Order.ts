import {Client} from "./Client";
import {Route} from "./Route";
import {OrderCategory} from "./OrderCategory";

export class Order{
  get categoryId(): number {
    return this._categoryId;
  }

  set categoryId(value: number) {
    this._categoryId = value;
  }

  constructor(model?:any) {
    if (model){
      this._id = model.id;
      this._routeId = model.routeId;
      this._clientId = model.clientId;
      this._exporterId = model.exporterId;
      this._recipientId = model.recipientId;
      this._orderNumber = model.orderNumber;
      this._orderDate = model.orderDate;
      this._loadingDate = model.loadingDate;
      this._loadingAddress = model.loadingAddress;
      this._unloadingAddress = model.unloadingAddress;
      this._cargoType = model.cargoType;
      this._cargoVolume = model.cargoVolume;
      this._cargoWeight = model.cargoWeight;
      this._pallets = model.pallets;
      this._mtl = model.mtl;
      this._deliveryDate = model.deliveryDate;
      this._price = model.price;
      this._currency = model.currency;
      this._categoryId = model.categoryId;
      this._miniRoute = model.miniRoute;
      this._reference = model.reference;
    }
  }

  get miniRoute(): string {
    return this._miniRoute;
  }
  set miniRoute(value: string) {
    this._miniRoute = value;
  }

  get routeId(): number {
    return this._routeId;
  }
  set routeId(value: number) {
    this._routeId = value;
  }

  get route(): Route | undefined {
    return this._route;
  }
  set route(value: Route | undefined) {
    this._route = value;
  }

  get recipient(): Client | undefined {
    return this._recipient;
  }
  set recipient(value: Client | undefined) {
    this._recipient = value;
  }

  get exporter(): Client | undefined {
    return this._exporter;
  }
  set exporter(value: Client | undefined) {
    this._exporter = value;
  }

  get client(): Client | undefined {
    return this._client;
  }
  set client(value: Client | undefined) {
    this._client = value;
  }

  get reference(): string {
    return this._reference;
  }
  set reference(value: string) {
    this._reference = value;
  }

  get category(): OrderCategory {
    return this._category;
  }
  set category(value: OrderCategory) {
    this._category = value;
  }

  get currency(): string {
    return this._currency;
  }
  set currency(value: string) {
    this._currency = value;
  }

  get price(): number {
    return this._price;
  }
  set price(value: number) {
    this._price = value;
  }

  get deliveryDate(): Date {
    return this._deliveryDate;
  }
  set deliveryDate(value: Date) {
    this._deliveryDate = value;
  }

  get mtl(): number {
    return this._mtl;
  }
  set mtl(value: number) {
    this._mtl = value;
  }

  get pallets(): number {
    return this._pallets;
  }
  set pallets(value: number) {
    this._pallets = value;
  }

  get cargoWeight(): number {
    return this._cargoWeight;
  }
  set cargoWeight(value: number) {
    this._cargoWeight = value;
  }

  get cargoVolume(): number {
    return this._cargoVolume;
  }
  set cargoVolume(value: number) {
    this._cargoVolume = value;
  }

  get cargoType(): string {
    return this._cargoType;
  }
  set cargoType(value: string) {
    this._cargoType = value;
  }

  get unloadingAddress(): string {
    return this._unloadingAddress;
  }
  set unloadingAddress(value: string) {
    this._unloadingAddress = value;
  }

  get loadingAddress(): string {
    return this._loadingAddress;
  }
  set loadingAddress(value: string) {
    this._loadingAddress = value;
  }

  get loadingDate(): Date {
    return this._loadingDate;
  }
  set loadingDate(value: Date) {
    this._loadingDate = value;
  }

  get recipientId(): number {
    return this._recipientId;
  }
  set recipientId(value: number) {
    this._recipientId = value;
  }

  get exporterId(): number {
    return this._exporterId;
  }
  set exporterId(value: number) {
    this._exporterId = value;
  }

  get clientId(): number {
    return this._clientId;
  }
  set clientId(value: number) {
    this._clientId = value;
  }

  get orderDate(): Date {
    return this._orderDate;
  }
  set orderDate(value: Date) {
    this._orderDate = value;
  }

  get orderNumber(): string {
    return this._orderNumber;
  }
  set orderNumber(value: string) {
    this._orderNumber = value;
  }

  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  private _id!:number;
  private _routeId!:number;
  private _clientId!:number
  private _exporterId!:number;
  private _recipientId!:number;
  private _categoryId!: number;
  private _orderNumber!:string;
  private _orderDate!:Date;
  private _loadingDate!:Date;
  private _loadingAddress!:string;
  private _unloadingAddress!:string;
  private _cargoType!:string;
  private _cargoVolume:number = 0;
  private _cargoWeight:number = 0;
  private _pallets:number = 0;
  private _mtl:number = 0;
  private _deliveryDate!:Date;
  private _price!:number;
  private _currency!:string;
  private _category!:OrderCategory;
  private _miniRoute!:string;
  private _reference!:string;
  private _route!: Route | undefined;
  private _client!: Client | undefined;
  private _exporter!: Client | undefined;
  private _recipient!: Client | undefined;
}
