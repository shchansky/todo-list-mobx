import { makeAutoObservable } from "mobx";
import { v4 } from "uuid";

type Item = {
  value: string;
  uid: string;
  isActive: boolean;
};

export class Todos {
  private _todos: Item[] = [
    { value: "initialValue", uid: v4(), isActive: true },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  public get todos() {
    return this._todos;
  }

  public setTodo(value: string) {
    if (value.length === 0) return;
    this._todos = [...this._todos, { value, uid: v4(), isActive: true }];
  }

  public delTodo(uid: string | number) {
    this._todos = this._todos.filter((item) => item.uid !== uid);
  }
}
