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


import style_button from '@appStyles/style.js';
import ProjectForm from '@appComponents/projects/ProjectForm.js';
import ProjectList from '@appComponents/projects/Projectlist.js';
import Nav from '@appComponents/widgets/Nav.js';
import {Actions} from 'react-native-router-flux';

import { connect } from 'react-redux'
import { addProjectAction } from '@actions';

import NavigationBar from 'react-native-navbar';
import { NavBarIconButton } from '@appLibs/CustomComponents/NavBar';


class Projects extends Component {

  onRightButtonPress(){
    Actions.addProject()
  }

  render(){
    const { dispatch, projects } = this.props;
    const leftButton = (
      <NavBarIconButton
        handlerFunc={Actions.settings}
        iconName="ios-options-outline"
        iconType="Ionicons"
      />
    );
    const rightButton = (
      <NavBarIconButton
        handlerFunc={this.onRightButtonPress}
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
        <ProjectList
          projects={projects}/>
      </View>
    );
  }

}


// Projects.PropTypes = {
//  projects: PropTypes.shape({
//    items: PropTypes.arrayOf(PropTypes.shape({
//      name: PropTypes.string.isRequired
//    }).isRequired).isRequired
//  })
// }


// Какие именно props мы хотим получить из приходящего, как аргумент глобального состояния?
// Обратите внимание: используйте https://github.com/faassen/reselect для лучшей производительности.
function select(state) {
  // console.log("Home select function state: ", state);
  return {
    projects: state.projects,
    routes: state.routes
  }
}

// Оборачиваем компонент `App` для внедрения в него функции `dispatch` и состояния
export default connect(select)(Projects)
