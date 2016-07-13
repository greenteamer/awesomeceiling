"use strict";
import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import { Actions } from 'react-native-router-flux';
import autobind from 'autobind-decorator';
import singleton from 'singleton';

import { ProjectModel } from '@appModels';
import * as Utils from '@appUtils';


@autobind
class CeilingStore extends singleton {
  @observable projects = [];
  total = 0;

  constructor(){
    super();
    autorun( () => console.log("ceilingStore report: ", this.report) );
    reaction( () => this.projects, () => this.total = this.projects.length );
  }

  @computed get report() {
    if (this.projects.length === 0) {
      return this.projects;
    }
    return this.toJS();
  }


  @action addProject(obj){
    // console.log('**** action add project obj: ', obj)
    this.projects.push( new ProjectModel(this, Utils.uuid(), obj.name, false) );
  }
  @action clearProjects() {
    this.projects = [];
  }

  toJS() {
    return this.projects.map( (project) => project.toJS());
  }
  static fromJS(array) {
    const ceilingStore = new CeilingStore();
    ceilingStore.projects = array.map( item => ProjectModel.fromJS(ceilingStore, item));
    return ceilingStore;
  }

}

export default CeilingStore.get();
