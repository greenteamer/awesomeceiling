import React, {
	AsyncStorage,
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
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';

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
			email: '',
			password: '',
			value: '',
			token: '',
			messages: []
		};
	}

	componentDidMount(){
		this._loadInitialState().done();
	}

	async _loadInitialState() {
		try {
			var value = await AsyncStorage.getItem("token");
			if (value !== null){
				this.setState({token: value});
				this._appendMessage('Login Recovered selection from disk: ' + value);
			} else {
				this._appendMessage('Login Initialized with no selection on disk.');
			}
		} catch (error) {
			this._appendMessage('Login AsyncStorage error: ' + error.message);
		}
	}

	async _onTokenChange(token) {
		console.log("Login start _onTokenChange");
		this.setState({
			token: token
		});
		try {
			await AsyncStorage.setItem("token", token);
			this._appendMessage('Saved selection to disk: ' + token);
			console.log('Login Saved selection to disk: ' + token);
		} catch (error) {
			this._appendMessage('AsyncStorage error: ' + error.message);
			console.log('Login AsyncStorage error: ' + error.message);
		}
	}

	_appendMessage(message) {
		this.setState({messages: this.state.messages.concat(message)});
	}


	login(){
		// console.log("login func start");
		let url = config.domain + '/rest-auth/login/';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
				// 'Authorization': 'Token ff56aed5307733817a0c47034fe2b223f38f5057'
			},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
			})
		})
			.then((response) => response.text())
			.then((responseText) => {
				console.log("Login auth responce: ", responseText);
				let token = JSON.parse(responseText).key;
				this._onTokenChange(token);
				Actions.profile()
			});
	}

	logout(){
		console.log("Login logout action start")
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

	getProjects(){
		console.log("Login get projects func start")
		let url = config.domain + '/api/projects/';
		fetch(url, {
			headers: {
				'Authorization': 'Token ff56aed5307733817a0c47034fe2b223f38f5057'
			},
		}).then((responce) => console.log(responce))
	}

	render(){
		console.log("Login state token: ", this.state.token);
		return(
			<View>
			<NavigationBar
				rightButton={<RightButton/>} />
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
							onChangeText={(value) => this.setState({email: value})}/>
						<TextInput
							style={styles.textInput}
							placeholder={'пароль'}
							secureTextEntry={true}
							placeholderTextColor={'#bcc5c9'} 
							onChangeText={(value) => this.setState({password: value})}/>
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
				<View style={{ marginTop: 10 }}>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={()=> console.log("Login token: ", this.state.token)}>
						<Text style={styles.textCenter}>
							<Text style={{color: '#06bebd'}}> получить token из storage</Text>
						</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
			</View>
		)
	}
}


class RightButton extends Component {
	render(){
		return(
			<TouchableHighlight
				underlayColor="transparent"
				onPress={()=> console.log("Login test: ")}>
				<Icon 
					name="ios-home" 
					size={30} 
					color="#900"/>
			</TouchableHighlight>
		)
	}
}
