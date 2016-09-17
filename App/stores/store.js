"use strict";
import { action, reaction, observable, observe, computed, autorun, toJS } from 'mobx';
import { Actions } from 'react-native-router-flux';
import autobind from 'autobind-decorator';
import singleton from 'singleton';
import _ from 'underscore';

import { ProjectModel } from '@appModels';
import * as Utils from '@appUtils';

import { realm } from '@appSchema';
const initialProjects = realm.objects('Project');

import { firebase } from './firebaseStore.js'


@autobind
class Store extends singleton {
  @observable projects;
  @observable company;

  constructor(){
    super();
    this.projects = (initialProjects) ? _.values(initialProjects) : [];
    this.company = {};
    autorun( () => {
      console.log("ceilingStore report: ", this.report);
    });
  }

  @computed get report() {
    return toJS(this);
  }

  @action clearProjects() {
    this.projects = [];
    let allProjects = realm.objects('Project');
    realm.write(()=>{
      realm.delete(allProjects);
    });
  }
}

export default Store.get();
