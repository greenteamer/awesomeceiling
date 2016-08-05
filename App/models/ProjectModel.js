"use strict";
import { observable, action, autorun, reaction, computed, toJS } from 'mobx';
import * as Utils from '@appUtils';
import { CeilingStore } from '@appStore';
import { realm } from '@appSchema';

import _ from 'underscore';

export default class ProjectModel {
  _id;
  @observable name;
  @observable address;
  @observable phone;
  @observable email;
  @observable text;

  constructor(obj) {
    this._id = Utils.uuid();
    this.name = obj.name || "Новый проект";
    this.address = obj.address || "";
    this.phone = obj.phone || "";
    this.email = obj.email || "";
    this.text = obj.text || "";
    this.updatedAt;
  }


  @computed get changeProject() {
    return this;
  }


  destroy() {
    CeilingStore.projects.remove(this);
  }
  save() {
    let newProject = this;
    newProject.updatedAt = new Date();

    // find objects with same _id in store
    let storeProj = _.find( CeilingStore.projects, (proj) => {
      return proj._id === this._id;
    });
    // unshift olny if it's new object
    if (!storeProj) {
      CeilingStore.projects.unshift(newProject);
    }
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
