import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

type Item = {
  value: string;
  uid: string;
  isActive: boolean;
};

class Todos {
  private _todos: Item[] = [{ value: "initialValue", uid: v4(), isActive: true }];

  constructor() {
    makeAutoObservable(this);
  }

  public get todos() {
    return this._todos;
  }

  public setTodo(value: string) {
    // this._todos = this._todos.push({ value, uid: v4(), isActive: true });
    //  this._todos.push({ value, uid: v4(), isActive: true });
    this._todos = [...this._todos, { value, uid: v4(), isActive: true }];
  }

  //   public delTodo(uid: string|number) {
  //     this._todos= this._todos.filter (item=> item.);
  //   }
}

export const todosState = new Todos();
