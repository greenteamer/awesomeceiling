import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux'

import ButtonRounded from '@appComponents/widgets/ButtonRounded.js';
import BTNBig from '@appComponents/widgets/BTNBig.js';
import styles from '@appStyles/style.js';
import gradient from '@appStyles/gradient.js';
import LinearGradient from 'react-native-linear-gradient';
import config from '@appRoot/config.js';
import { firebase } from '../../stores/firebaseStore';

var deviceWidth = Dimensions.get('window').width;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password1: '',
      password2: '',
      token: ''
    };
  }

  register(){
    const { email, password1 } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password1)
      .then(Actions.login)
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('auth error: ', errorCode, errorMessage);
      });
  }

  logout = () => {
    firebase.auth().signOut();
  }

  validation = () => {
    const { email, password1, password2 } = this.state;
    if (password1 !== password2) return false;
    if (password1.length <= 5) return false;
    if (!validateEmail(email)) return false;
    return true;
  }

  render(){
    const { store } = this.props;
    return(
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={{marginTop: 80, marginBottom: 20}}>
          <Image style={{alignSelf: 'center'}} source={require('@appImages/icon.png')}/>
          <Text style={styles.h1Center}>
            Регистрация
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
              onChangeText={(value) => this.setState({email: value})}
              value={this.state.value} />
            <TextInput
              style={styles.textInput}
              placeholder={'пароль'}
              secureTextEntry={true}
              onChangeText={(value) => this.setState({password1: value})}
              placeholderTextColor={'#bcc5c9'} />
            <TextInput
              style={styles.textInput}
              placeholder={'введите пароль повторно'}
              secureTextEntry={true}
              onChangeText={(value) => this.setState({password2: value})}
              placeholderTextColor={'#bcc5c9'} />
          </View>
          <BTNBig
            disabled={!this.validation()}
            disabledText={{title: 'Данные введены некорректно', description: ''}}
            onPress={
                ()=> {
                  this.register();
                  // Actions.MainTabBar();
                }
              }
            text="Зарегистрироваться" />
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={()=>Actions.login()}>
            <Text style={styles.textCenter}>
              Уже есть аккаунт?
              <Text style={{color: '#06bebd'}}> Войти</Text>
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    )
  }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


