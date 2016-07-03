import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	TextInput,
	StyleSheet,
	Dimensions,
	ScrollView,
	NavigatorIOS,
	TouchableHighlight,
	AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import ResponsiveImage from 'react-native-responsive-image';

import ButtonRounded from '../components/widgets/ButtonRounded.js';
import BTNBig from '../components/widgets/BTNBig.js';
import styles from '../components/styles/style.js';
import gradient from '../components/styles/gradient.js';
import LinearGradient from 'react-native-linear-gradient';
import config from '../config.js';

var deviceWidth = Dimensions.get('window').width;

export default class Profile extends Component {
	async _removeStorage() {
		try {
			await AsyncStorage.removeItem("token");
			console.log('Register Selection removed from disk.');
		} catch (error) {
			console.log('Register AsyncStorage error: ' + error.message);
		}
	}

	logout(){
		console.log("Register logout action start")
		let url = config.domain + '/rest-auth/logout/';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token: '0022855a3bb585d919d098807cd511050c39ba01',
			})
		}).then((response) => console.log('Register logout response: ', response))
	}

	render(){
		return(
			<ScrollView style={{backgroundColor: '#ffffff'}}>
				<View style={{marginTop: 120, marginBottom: 20}}>
					<ResponsiveImage style={{alignSelf: 'center', borderRadius:46}} source={require('../components/img/gorodova.png')} initWidth="120" initHeight="120"/>
					<Text style={styles.h1Center}>
						Профиль
					</Text>
					<Text style={styles.textCenter}>
						Постройте свою идеальную компанию
					</Text>
				</View>
				<View style={{ marginTop: 20 }}>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={()=> Actions.login()}>
						<Text style={styles.textCenter}>
							<Text style={{color: '#06bebd'}}> Войти</Text>
						</Text>
					</TouchableHighlight>
				</View>
				<View style={{ marginTop: 20 }}>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={()=>this.logout()}>
						<Text style={styles.textCenter}>
							<Text style={{color: '#06bebd'}}> Выйти</Text>
						</Text>
					</TouchableHighlight>
				</View>
				<View style={{ marginTop: 20 }}>
					<TouchableHighlight
						underlayColor="transparent"
						onPress={this._removeStorage}>
						<Text style={styles.textCenter}>
							<Text style={{color: '#06bebd'}}> удалить token из storage</Text>
						</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
		)
	}
}


