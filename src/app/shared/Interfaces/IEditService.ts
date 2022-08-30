export interface IEditService {
  get activeModel(): any;

  set activeModel(model: any);

  onAdd(): void;

  onSubmit(): void;

  onDelete(): void;
}
