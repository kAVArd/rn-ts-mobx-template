import {observable, computed, action} from 'mobx';
import BaseStore from './BaseStore';

export interface GlobalStore extends BaseStore {
  textInput: string;
  setTextInput: (value: string) => void;
}

export default class Global implements GlobalStore {
  @observable private text = '';

  @computed public get textInput() {
    return this.text;
  }

  @action.bound
  public dispose = () => {
    this.text = '';
  };

  @action.bound
  public setTextInput = (value: string) => {
    this.text = value;
  };
}
