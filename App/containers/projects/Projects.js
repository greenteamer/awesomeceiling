'use strict';
import React, { Component } from 'react';
import {
  ListView,
  PropTypes,
  AsyncStorage,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

import {observer} from 'mobx-react/native';
import { toJS } from 'mobx';


import style_button from '@appStyles/style.js';
import ProjectForm from '@appComponents/projects/ProjectForm.js';
import ProjectList from '@appComponents/projects/Projectlist.js';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';


import NavigationBar from 'react-native-navbar';
import { NavBarIconButton } from '@appLibs/CustomComponents/NavBar';


@observer
export default class Projects extends Component {

  addProject() {
    const { ceilingStore } = this.props;
    ceilingStore.addProject({ name: "testName" });
    let newProject = ceilingStore.projects[ceilingStore.projects.length - 1];
    Actions.addProject({project: newProject});
  }

  render(){
    const { ceilingStore } = this.props;
    const projects = toJS(ceilingStore.projects);
    // console.log( '***** Projects.js render ceilingStore.projects.length: ', projects.length );
    console.log( '***** Projects.js render ceilingStore.projects: ', projects );
    const leftButton = (
      <NavBarIconButton
        handlerFunc={Actions.settings}
        iconName="ios-options-outline"
        iconType="Ionicons"
      />
    );
    const rightButton = (
      <NavBarIconButton
        handlerFunc={ this.addProject.bind(this) }
        iconName="ios-add"
        iconType="Ionicons"
      />
    );
    const NavBar = (
      <NavigationBar
        title={{ title: "Проекты", tintColor: "#ffffff" }}
        tintColor="#2c3239"
        leftButton={leftButton}
        rightButton={rightButton}
        statusBar={{ style: 'light-content' }}
      />
    );
    return (
      <View style={{ flex: 1 }}>
        {NavBar}
        <View>
          <ProjectList
            projects={ projects } />
        </View>
      </View>
    );
  }

}
