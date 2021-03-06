import { makeAutoObservable } from "mobx";

export class Form {
  private _value: string = "";

  constructor() {
    makeAutoObservable(this, {}, {deep:true});
    this.setValue= this.setValue.bind(this)
  }

  public get value() {
    return this._value;
  }

  public setValue(value: string) {
    this._value = value;
  }
}


