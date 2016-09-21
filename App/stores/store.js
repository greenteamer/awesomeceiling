"use strict";
import { action, reaction, observable, observe, computed, autorun, when, toJS, map } from 'mobx';
import { AlertIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';
import autobind from 'autobind-decorator';
import singleton from 'singleton';
import _ from 'underscore';

import { ProjectModel } from '@appModels';
// import { realm } from '@appSchema';
// const initialProjects = realm.objects('Project');
import { firebase, fb } from './firebaseStore.js'


class Store extends singleton {
  @observable projects;
  @observable company;
  @observable user;
  @observable prices;
  @observable contacts;
  @observable materials;
  @observable materialTypes;

  constructor(){
    super();
    this.projects = [];
    this.company = {};
    this.prices = [];
    this.contacts = {};
    // firebase db initial data:
    this.fetchData('materials');
    this.fetchData('materialTypes');

    autorun( () => {
      console.log("****** STORE REPORT: ", this);
    });
  }

  @action fetchData(tableName) {
    const response = fb[tableName]
      .once('value')
        .then(snapshot => {
          // console.log('test fetch data: ', snapshot.val());
          this[tableName] = snapshot.val();
        });
  }

  // @computed get report() {
  //   return toJS(this);
  // }

  @action clearProjects() {
    this.projects = [];
    // let allProjects = realm.objects('Project');
    // realm.write(()=>{
    //   realm.delete(allProjects);
    // });
  }
}

export default Store.get();
