export interface IRepository<T, T2>{

  Add(item: T): void;

  Get(id: T2): T | undefined;

  GetAll(): T[];

  Remove(item: T): void;

  Update(item: T): void;
}
