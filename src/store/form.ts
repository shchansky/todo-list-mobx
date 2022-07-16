import { makeAutoObservable } from "mobx";

class Form {
  private _value: string = "AZAZAZA";

  constructor() {
    makeAutoObservable(this);
  }

  public get value() {
    return this._value;
  }

  public setValue(value: string) {
    this._value = value;
  }
}

export const fromState= new Form()