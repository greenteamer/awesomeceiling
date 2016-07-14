"use strict";
import { observable, action, computed, toJS } from 'mobx';
import * as Utils from '@appUtils';
import { CeilingStore } from '@appStore';
import { realm } from '@appSchema';

export default class ProjectModel {
  _id;
  @observable name;
  @observable address;
  @observable phone;
  @observable email;
  @observable text;

  @observable isSaving = false;


  constructor(obj) {
    this._id = Utils.uuid();
    this.name = obj.name;
    this.address = obj.address;
    this.phone = obj.phone;
    this.email = obj.email;
    this.text = obj.text;
    this.createdAt;
  }

  destroy() {
    CeilingStore.projects.remove(this);
  }
  save() {
    let newProject = this;
    newProject.createdAt = new Date();
    CeilingStore.projects.unshift(newProject);
    realm.write(()=>{
      realm.create('Project', newProject, true);
    });
  }

  @action setName(name) {
    this.name = name;
  }

  // toJS() {
  //   return {
  //     _id: this._id,
  //     name: this.name,
  //     address: this.address,
  //     phone: this.phone,
  //     email: this.email,
  //     text: this.text,
  //     cost: this.cost,
  //   }
  // }

  // static fromJS(store, object) {
  //   return new ProjectModel(CeilingStore, object.id, object.name);
  // }

}
