import React, { Component } from 'react';
import {
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
import {Actions} from 'react-native-router-flux'
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';

import ButtonRounded from '@appComponents/widgets/ButtonRounded.js';
import BTNBig from '@appComponents/widgets/BTNBig.js';
import styles from '@appStyles/style.js';
import gradient from '@appStyles/gradient.js';
import LinearGradient from 'react-native-linear-gradient';
import config from '@appRoot/config.js';



import { realm , Sequence } from '@appSchema';

var deviceWidth = Dimensions.get('window').width;


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      value: '',
    };
  }

  componentDidMount(){
    let userHash = realm.objects('User');
    if (userHash['0']) {
      Actions.projects();
    };
  }

  async _onTokenChange(token) {
    const { email } = this.state;
    try {
      let exstUser = realm.objects('User').filtered('email = $0', email);
      let obj;
      if (exstUser['0']) {
        obj = Object.assign({ email: email, token: token }, { id: exstUser[0].id });
      } else {
        obj = {
          email: email,
          token: token,
        };
      };
      let saved = Sequence.save('User', obj);
    } catch (error) {
      console.log('Realm error: ' + error.message);
    }
  }


  login(){
    let url = config.domain + '/rest-auth/login/';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    })
      .then((response) => response.text())
      .then((responseText) => {
        let token = JSON.parse(responseText).key;
        this._onTokenChange(token);
        Actions.projects()
      });
  }

  // logout(){
  //   console.log("Login logout action start")
  //   let url = config.domain + '/rest-auth/logout/';
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       token: 'Token ff56aed5307733817a0c47034fe2b223f38f5057',
  //     })
  //   }).then((response) => console.log('logout response: ', response))
  // }

  // getProjects(){
  //   console.log("Login get projects func start")
  //   let url = config.domain + '/api/projects/';
  //   fetch(url, {
  //     headers: {
  //       'Authorization': 'Token ff56aed5307733817a0c47034fe2b223f38f5057'
  //     },
  //   }).then((responce) => console.log(responce))
  // }

  render(){
    return(
      <View style={{ flex: 1 }}>
        {
          // <NavigationBar rightButton={<RightButton/>} />
        }
        <ScrollView style={{backgroundColor: '#ffffff'}}>
          <View style={{marginTop: 80, marginBottom: 20}}>
            <Image style={{alignSelf: 'center'}} source={require('@appImages/icon.png')}/>
            <Text style={styles.h1Center}>
              Авторизация
            </Text>
            <Text style={styles.textCenter}>
              Постройте свою идеальную компанию
            </Text>
          </View>
          <View>
            <View style={styles.formGroup}>
              <TextInput
                style={styles.textInput}
                placeholder={'email'}
                placeholderTextColor={'#bcc5c9'}
                onChangeText={(value) => this.setState({email: value})}/>
              <TextInput
                style={styles.textInput}
                placeholder={'пароль'}
                secureTextEntry={true}
                placeholderTextColor={'#bcc5c9'}
                onChangeText={(value) => this.setState({password: value})}/>
            </View>
            <BTNBig
              onPress={ ()=> this.login() }
              text="Войти" />
          </View>

          {
            // <View style={{ marginTop: 20 }}>
            //   <TouchableHighlight
            //     underlayColor="transparent"
            //     onPress={()=>Actions.register()}>
            //     <Text style={styles.textCenter}>
            //       Еще нет аккаунта?
            //       <Text style={{color: '#06bebd'}}> Зарегистрироваться</Text>
            //     </Text>
            //   </TouchableHighlight>
            // </View>
          }

        </ScrollView>
      </View>
    )
  }
}

