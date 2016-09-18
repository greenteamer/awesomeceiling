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
import PriceList from '@appComponents/settings/PriceList.js';
import ContactList from '@appComponents/settings/ContactList.js';
import MaterialList from '@appComponents/settings/MaterialList.js';
import NavigationBar from 'react-native-navbar';
import { NavBarIconButton } from '@appLibs/CustomComponents/NavBar';
import {Actions} from 'react-native-router-flux';
import _ from 'underscore';
import { toJS } from 'mobx';


const leftButton = (
  <NavBarIconButton
    handlerFunc={Actions.pop}
    iconName="ios-arrow-back"
    iconType="Ionicons"
  />
);
const NavBar = (
  <NavigationBar
    title={{ title: "Проекты", tintColor: "#ffffff" }}
    tintColor="#2c3239"
    leftButton={leftButton}
    statusBar={{ style: 'light-content' }}
  />
);


export default class extends Component {
  statics: {
    title: '<SettingsView>',
    description: 'Performant, scrollable list of data.'
  }

  constructor(props) {
    super(props);
    this.state = {
      token: '',
      currentTab: 'price',
      prices: [],
      materials: [],
      contacts: null,
    };
  }

  componentDidMount() {
    console.log('Settings store: ', this.props.store);
    this.getPrices();
    this.getCompany();
    this.getMaterials();
  }

  getPrices() {
    // let url = config.domain + '/api/price/';
    // let user = realm.objects('User')['0'];
    // let token = 'Token ' + user.token;
    // fetch(url, {
    //   headers: {
    //     'Authorization': token
    //   },
    // })
    // .then((response) => {
    //   let data = JSON.parse(response._bodyText);
    //   let array = _.map(_.pairs(data[0]), (arr)=>{
    //     return {key: arr[0], value: arr[1]}
    //   })
    //   this.setState({
    //       prices: array,
    //   });
    // })
  }

  getContacts() {
    // let url = config.domain + '/api/price/';
    // let user = realm.objects('User')['0'];
    // let token = 'Token ' + user.token;
    // fetch(url, {
    //   headers: {
    //     'Authorization': token
    //   },
    // })
    // .then((response) => {
    //   let data = JSON.parse(response._bodyText);
    //   let array = _.map(_.pairs(data[0]), (arr)=>{
    //     return {key: arr[0], value: arr[1]}
    //   })
    //   this.setState({
    //       prices: array,
    //   });
    // })
  }

  getCompany(){
    // let url = config.domain + '/api/company/';
    // let user = realm.objects('User')['0'];
    // let token = 'Token ' + user.token
    // fetch(url, {
    //   headers: {
    //     'Authorization': token
    //   },
    // })
    // .then((response) => {
    //   let data = JSON.parse(response._bodyText);
    //   console.log('***** response company: ', data);
    //   this.setState({
    //     contacts: data[0],
    //   });
    // })
  }

  getMaterials(){
    // let url = config.domain + '/api/materials/';
    // let user = realm.objects('User')['0'];
    // let token = 'Token ' + user.token
    // fetch(url, {
    //   headers: {
    //     'Authorization': token
    //   },
    // })
    // .then((response) => {
    //   let data = JSON.parse(response._bodyText);
    //   console.log('materials : ', data)
    //   let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //   this.setState({
    //     materials: data,
    //   });
    // })
  }

  _setCurrentTab(currentTab){
    this.setState({
      currentTab: currentTab
    })
  }

  _renderTab(){
    const { currentTab } = this.state;
    const { prices, contacts, materials, materialTypes } = this.props.store;
    const storeJSON = toJS(this.props.store);
    console.log('---- _renderTab storeJSON: ', storeJSON);
    if (!currentTab) {
      return <Text>Нет данных</Text>
    }
    if (currentTab == 'price') {
      return (
        <PriceList prices={prices}/>
      )
    }
    if (currentTab == 'contacts') {
      return (
        <ContactList contacts={contacts} />
      )
    }

    if (currentTab == 'materials') {
      return (
        <MaterialList materials={materials} materialTypes={materialTypes}/>
      )
    }
  }

  render(){
    if (!this.state.currentTab) {
    return <Text>Loading...</Text>;
  }
    return (
      <View style={styles.flex}>
        {NavBar}
        <View style={styles.topTabBar}>
          <TouchableHighlight
            onPress={()=> this._setCurrentTab('price')}
            style={styles.topTabBarItem}>
            <Text
              style={(this.state.currentTab == 'price') ? styles.topTabBarTextSelected : styles.topTabBarText}>
              Цены</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={()=> this._setCurrentTab('contacts')}
            style={styles.topTabBarItem}>
            <Text
              style={(this.state.currentTab == 'contacts') ? styles.topTabBarTextSelected : styles.topTabBarText}>
              Контакты</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={()=> this._setCurrentTab('materials')}
            style={styles.topTabBarItem}>
            <Text
              style={(this.state.currentTab == 'materials') ? styles.topTabBarTextSelected : styles.topTabBarText}>
              Материалы</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          {this._renderTab()}
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  topTabBar: {
    backgroundColor: "#191f28",
    // flex: 1,
    flexDirection:'row',
    // height: 50,
  },
  topTabBarItem: {
    flex: 0.33,
  },
  topTabBarText: {
    flex: 0.33,
    textAlign:'center',
    padding: 10,
    fontSize: 12,
    color: '#b3bdc2'
  },
  topTabBarTextSelected: {
    color: '#06bebd',
    flex: 0.33,
    textAlign:'center',
    padding: 10,
    fontSize: 12
  },
  content: {
    flex: 1,
  },
});
