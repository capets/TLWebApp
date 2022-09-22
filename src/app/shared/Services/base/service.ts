export abstract class Service {
  abstract get activeModel(): any;

  abstract set activeModel(model: any);

  abstract Get(id: any): any;

  abstract GetAll(): any;

  abstract onDelete(id: any): void;

  abstract onUpdate(): void;

  abstract onAdd(): void ;

  abstract onSubmit(): void;
}
