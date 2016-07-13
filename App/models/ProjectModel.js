"use strict";
import { observable, action } from 'mobx';


export default class ProjectModel {
  store;
  id;
  @observable name;
  @observable cost;

  constructor(store, id, name, cost) {
    this.store = store;
    this.id = id;
    this.name = name;
  }

  @action destroy() {
    this.store.projects.remove(this);
  }
  @action setName(name) {
    this.name = name;
  }

  toJS() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  static fromJS(store, object) {
    return new ProjectModel(store, object.id, object.name);
  }

}
