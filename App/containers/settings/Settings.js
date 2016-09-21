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
import Layout from '@appContainers/Layout.js';


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

  _setCurrentTab(currentTab){
    this.setState({
      currentTab: currentTab
    })
  }

  _renderTab(){
    const { currentTab } = this.state;
    const { prices, contacts } = this.props.store;
    const storeJSON = toJS(this.props.store);
    console.log('---- _renderTab storeJSON: ', storeJSON);
    if (!currentTab) {
      return <Text>Нет данных</Text>
    }
    if (currentTab === 'price') {
      return (
        <PriceList prices={prices}/>
      )
    }
    if (currentTab === 'contacts') {
      return (
        <ContactList contacts={contacts} />
      )
    }

    if (currentTab === 'materials') {
      return (
        <MaterialList materials={storeJSON.materials}/>
      )
    }
  }

  condition() {
    const {store} = this.props;
    const storeJSON = toJS(store);
    if (!this.state.currentTab) return false;
    if (!storeJSON.materials && !storeJSON.materialTypes) return false;
    return true;
  }

  render(){
    const {store} = this.props;
    const storeJSON = toJS(store);
    // if (!this.state.currentTab || !storeJSON.materials || !storeJSON.materialTypes) {
    //   return <Layout condition={false}><Text>Loading...</Text></Layout>;
    // }
    return (
      <Layout condition={this.condition()}>
        <View style={styles.flex}>
          {NavBar}
          <View style={styles.topTabBar}>
            <TouchableHighlight
              onPress={()=> this._setCurrentTab('price')}
              style={styles.topTabBarItem}>
              <Text
                style={(this.state.currentTab == 'price')
                  ? styles.topTabBarTextSelected
                  : styles.topTabBarText}>Цены</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={()=> this._setCurrentTab('contacts')}
              style={styles.topTabBarItem}>
              <Text
                style={(this.state.currentTab == 'contacts')
                  ? styles.topTabBarTextSelected
                  : styles.topTabBarText}>Контакты</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={()=> this._setCurrentTab('materials')}
              style={styles.topTabBarItem}>
              <Text
                style={(this.state.currentTab == 'materials')
                  ? styles.topTabBarTextSelected
                  : styles.topTabBarText}>Материалы</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.content}>
            {this._renderTab()}
          </View>
        </View>
      </Layout>
    );
  }
}


var styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  topTabBar: {
    backgroundColor: "#191f28",
    flexDirection:'row',
  },
  topTabBarItem: {
    flex: 0.33,
  },
  topTabBarText: {
    textAlign:'center',
    padding: 15,
    fontSize: 12,
    color: '#b3bdc2',
  },
  topTabBarTextSelected: {
    color: '#06bebd',
    textAlign:'center',
    padding: 15,
    fontSize: 12,
  },
  content: {
    flex: 1,
  },
});
