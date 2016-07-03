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

import ButtonRounded from '../widgets/ButtonRounded.js';
import BTNBig from '../widgets/BTNBig.js';
import styles from '../styles/style.js';
import gradient from '../styles/gradient.js';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../config.js';

// import realm from '../../models/realm.js';

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

	async _onTokenChange(token) {
		console.log("Register start _onTokenChange");
		this.setState({
			token: token
		});
		try {
			await AsyncStorage.setItem("token", token);
			console.log('Register Saved selection to disk: ' + token);
		} catch (error) {
			console.log('Register AsyncStorage error: ' + error.message);
		}
	}

	register(){
		// console.log("login func start");
		let url = config.domain + '/rest-auth/registration/';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: this.state.username,
				email: this.state.email,
				password1: this.state.password1,
				password2: this.state.password2,
			})
		})
			.then((response) => response.text())
			.then((responseText) => {
				console.log("Register registration response: ", responseText);
				let token = JSON.parse(responseText).key;
				this._onTokenChange(token);
			})
			// .then((responseText) => console.log("auth responce: ", responseText));
	}


	getMyData(){
		null
		// let accounts = realm.objects('Account');
		// console.log('realm accounts: ', accounts);
	}


	render(){
		return(
			<ScrollView style={{backgroundColor: '#ffffff'}}>
				<View style={{marginTop: 80, marginBottom: 20}}>
					<Image style={{alignSelf: 'center'}} source={require('../img/icon.png')}/>
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
							placeholder={'имя пользователя'}
							placeholderTextColor={'#bcc5c9'}
							onChangeText={(value) => this.setState({username: value})}
							value={this.state.value} />
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
						onPress={()=> this.register()}
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
				<View style={{ marginTop: 20 }}>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={this.getMyData.bind(this)}>
						<Text style={styles.textCenter}>
							<Text style={{color: '#06bebd'}}> мои данные</Text>
						</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
		)
	}

}


