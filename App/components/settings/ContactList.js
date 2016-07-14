'use strict';
import React, { Component } from 'react';
import {
  ListView,
  AsyncStorage,
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableHighlight
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import common_styles from '@appStyles/style.js';
import _ from 'lodash';
import ContactForm from './ContactForm.js';

export default class ContactList extends Component {
  statics: {
    title: '<ContactList>',
    description: 'Performant, scrollable list of data.'
  }

  constructor() {
    super();
    this.state = {
    };
  }

  render(){
    const { contacts } = this.props;
    if (!contacts) {
      return <Text>Loading...</Text>;
    }
    return (
      <ScrollView>
        <View style={styles.view}>
          <View>
            <Text
              style={styles.h1Center}>Мои данные:</Text>
            <ContactForm />
          </View>
          <Text style={styles.h1Center}>Данные компании:</Text>
          <View>
            <View style={styles.companyTextContainer}>
              <Text style={styles.comapnyLabel}>Название: </Text>
              <Text style={styles.companyData}>{contacts.name}</Text>
            </View>
            <View style={styles.companyTextContainer}>
              <Text style={styles.comapnyLabel}>Адрес: </Text>
              <Text style={styles.companyData}>{contacts.address}</Text>
            </View>
            <View style={styles.companyTextContainer}>
              <Text style={styles.comapnyLabel}>Телефон: </Text>
              <Text style={styles.companyData}>{contacts.phone}</Text>
            </View>
            <View style={styles.companyTextContainer}>
              <Text style={styles.comapnyLabel}>email: </Text>
              <Text style={styles.companyData}>{contacts.email}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}


var styles = StyleSheet.create({
  companyTextContainer: {
    flexDirection: 'row',
  },
  comapnyLabel: {
    width: 120
  },
  companyData:{
    fontSize: 14,
    textAlign: 'right'
  },
  view: {
    backgroundColor: '#fff',
    padding: 10,
    paddingBottom: 140,
    marginBottom: 140
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
  inline: {
    flexDirection:'row',
  },
  textInput: {
    height: 40,
    fontSize: 12,
    width: 200,
    textAlign: 'center',
    backgroundColor: '#f7f7f8',
    color: '#696d6f',
    paddingLeft: 10,
    marginBottom: 12
  },
  text: {
    flex: 1,
  },
  topTabBar: {
    backgroundColor: "#191f28",
    flex: 1,
    flexDirection:'row',
  },
  topTabBarItem: {
    flex: 0.33,
  },
  topTabBarTextSelected: {
    color: '#06bebd'
  },
  h1Center: {
    color: '#3c4350',
    fontSize: 23,
    marginBottom: 10,
  },

});
