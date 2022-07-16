import { makeAutoObservable } from "mobx";

class Form {
  private _value: string = "";

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

export const formState = new Form();
