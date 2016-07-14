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
  TouchableHighlight
} from 'react-native';


import style_button from '@appStyles/style.js';
import ProjectForm from '@appComponents/projects/ProjectForm.js';
import ProjectList from '@appComponents/projects/Projectlist.js';
import Nav from '@appComponents/widgets/Nav.js';
import {Actions} from 'react-native-router-flux';
import BTN from '@appComponents/widgets/BTN.js';

import { toJS } from 'mobx';
import { ProjectModel } from '@appModels';

export default class AddPlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project : null,
      name    : "",
      address : "",
      phone   : "",
      email   : "",
      cost    : "",
      text    : "",
    }
  }

  saveProject() {
    const { ceilingStore } = this.props;
    const { name, address, phone, email, cost, text } = this.state;

    console.log('***** AddProject.js ceilingStore to js: ', toJS(ceilingStore) );
    // ceilingStore.addProject(this.state);
    // let newProject = ceilingStore.projects[ceilingStore.projects.length - 1];

    // let newProject = new ProjectModel(this.state);
    // newProject.save();

    // Actions.pop();
  }

  render(){
    const { ceilingStore } = this.props;
    const { name, address, phone, email, cost, text } = this.state;
    // console.log('**** AddProject start render ceilingStore: ', ceilingStore);
    return (
      <View style={styles.container}>
        <Nav
          title="Создание проекта"
          leftIconName="ios-close"
          onLeftButtonPress={this.onLeftButtonPress}/>
        <ScrollView>
          <View style={styles.view}>
            <TextInput
              style                = {styles.textInput}
              placeholder          = "Название проекта"
              placeholderTextColor = "#333"
              onChangeText         = {(value) => this.setState({ name: value })}
              value                = {name}
            />
            <TextInput
              style                = {styles.textInput}
              placeholder          = "Адрес"
              placeholderTextColor = "#333"
              onChangeText         = {(value) => this.setState({address: value})}
              value                = {address}
            />
            <TextInput
              style                = {styles.textInput}
              placeholder          = "Телефон"
              placeholderTextColor = "#333"
              onChangeText         = {(value) => this.setState({phone: value})}
              value                = {phone}
            />
            <TextInput
              style                = {styles.textInput}
              placeholder          = "Email"
              placeholderTextColor = "#333"
              onChangeText         = {(value) => this.setState({email: value})}
              value                = {email}
            />
            <BTN
              style   = {styles.btnCenter}
              onPress = {this.saveProject.bind(this)}
              text    = "Сохранить" />
          </View>
        </ScrollView>
      </View>
    );
  }

  onRightButtonPress(){
    // console.log("AddProjects onRightButtonPress start");
  }

  onLeftButtonPress(){
    // console.log("AddProjects onLeftButtonPress start");
    Actions.pop()
  }
}

var deviceWidth = Dimensions.get('window').width;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0
  },
  firstRow: {
    marginTop: -20,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
  view: {
    // marginBottom: 20
    padding: 10
  },
  textInput: {
    height          : 40,
    fontSize        : 12,
    width           : deviceWidth - 20,
    textAlign       : 'center',
    backgroundColor : '#f7f7f8',
    color           : '#696d6f',
    paddingLeft     : 10,
    marginBottom    : 12
  },
  btnLeft: {
    backgroundColor: '#06bebd',
    padding: 5,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 20,
    width: deviceWidth-150,
    height: 35
  },
  btnCenter: {
    backgroundColor: '#06bebd',
    padding: 10,
    borderColor: 'transparent',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 25,
    width: deviceWidth-20,
    height: 45
  },
});
