"use strict";
import { action, reaction, observable, observe, computed, autorun, toJS } from 'mobx';
import { Actions } from 'react-native-router-flux';
import autobind from 'autobind-decorator';
import singleton from 'singleton';
import _ from 'underscore';
import { ProjectModel } from '@appModels';
// import { realm } from '@appSchema';
// let initialProjects = realm.objects('Project');


@autobind
class CeilingStore extends singleton {
  @observable projects;
  @observable company;

  constructor(){
    super();
    // this.projects = (initialProjects) ? _.values(initialProjects) : [];
    this.company = {};
    this.user = {};
  }

  @action clearProjects() {
    this.projects = [];
    // let allProjects = realm.objects('Project');
    // realm.write(()=>{
    //   realm.delete(allProjects);
    // });
  }

  // static fromJS(array) {
  //   const ceilingStore = new CeilingStore();
  //   ceilingStore.projects = array.map( item => ProjectModel.fromJS(ceilingStore, item));
  //   return ceilingStore;
  // }

  // toJS() {
  //   return this.projects.map( (project) => project.toJS());
  // }

  // @action addProject(obj){
  //   // this.projects.push( new ProjectModel(this, Utils.uuid(), obj, false) );
  //   this.projects.push( new ProjectModel(obj) );
  // }

}

export default CeilingStore.get();
