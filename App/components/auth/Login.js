import React, {
	Component,
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

import ButtonRounded from '../widgets/ButtonRounded.js';
import BTNBig from '../widgets/BTNBig.js';
import styles from '../styles/style.js';
import gradient from '../styles/gradient.js';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../config.js';

var deviceWidth = Dimensions.get('window').width;

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	login(){
		// console.log("login func start");
		let url = config.domain + '/rest-auth/login/';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Token ff56aed5307733817a0c47034fe2b223f38f5057'
			},
			body: JSON.stringify({
				email: 'admin@admin.ru',
				password: 'balabas1986',
			})
		})
			.then((response) => response.text())
			.then((responseText) => console.log("auth responce: ", responseText));
	}

	logout(){
		console.log("logout action start")
		let url = config.domain + '/rest-auth/logout/';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				token: 'Token ff56aed5307733817a0c47034fe2b223f38f5057',
			})
		}).then((response) => console.log('logout response: ', response))
	}

	pushToRegister(){

	}

	getProjects(){
		console.log("get projects func start")
		let url = config.domain + '/api/projects/';
		fetch(url, {
			headers: {
				'Authorization': 'Token ff56aed5307733817a0c47034fe2b223f38f5057'
			},
		})
			.then((responce) => console.log(responce))
	}

	render(){

		return(
			<ScrollView style={{backgroundColor: '#ffffff'}}>
				<View style={{marginTop: 80, marginBottom: 20}}>
					<Image style={{alignSelf: 'center'}} source={require('../img/icon.png')}/>
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
							onChangeText={(value) => this.setState({value})}
							value={this.state.value} />
						<TextInput
							style={styles.textInput}
							placeholder={'пароль'}
							secureTextEntry={true}
							placeholderTextColor={'#bcc5c9'} />
					</View>
					<BTNBig
						onPress={()=> this.login()}
						text="Войти" />
				</View>
				<View style={{ marginTop: 20 }}>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={()=>Actions.register()}>
						<Text style={styles.textCenter}>
							Еще нет аккаунта?
							<Text style={{color: '#06bebd'}}> Зарегистрироваться</Text>
						</Text>
					</TouchableHighlight>
				</View>
				<View style={{ marginTop: 10 }}>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={()=>this.logout()}>
						<Text style={styles.textCenter}>
							<Text style={{color: '#06bebd'}}> Выйти</Text>
						</Text>
					</TouchableHighlight>
				</View>
				<View style={{ marginTop: 10 }}>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={()=>this.getProjects()}>
						<Text style={styles.textCenter}>
							<Text style={{color: '#06bebd'}}> получить проекты</Text>
						</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
		)
	}
}
