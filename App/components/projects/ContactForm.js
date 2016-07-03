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
import Icon          from 'react-native-vector-icons/Ionicons';
import BTN           from '../widgets/BTN.js';
import common_styles from '../styles/style.js';
import _             from 'lodash';

export default class ContactForm extends Component {
	statics: {
		title: '<ContactForm>',
		description: 'Performant, scrollable list of data.'
	}

	constructor(props) {
		super(props);
		this.state = {
			token      : '',
			account    : null,
			first_name : '',
			last_name  : '',
			phone      : '',
			email      : ''
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
				this.getAccount();
			} else {
				null
			}
		} catch (error) {
			null
		}
	}

	getAccount(){
		let url = config.domain + '/api/accounts/';
		let token = 'Token ' + this.state.token
		fetch(url, {
			headers: {
				'Authorization': token
			},
		})
		.then((response) => {
			let data = JSON.parse(response._bodyText);
			console.log("account: ", data[0])
			// let performer_of_account = data[0].performer_of_account;
			if (data.length > 0) {
				this.setState({
					account    : data[0],
					first_name : (data[0].first_name) ? data[0].first_name : '',
					last_name  : (data[0].last_name) ? data[0].last_name   : '',
					phone      : (data[0].phone) ? data[0].phone           : '',
					email      : (data[0].email) ? data[0].email   				 : ''
				});
			}
		})
	}

	_updateAccount(){
		let url = config.domain + '/api/update-account/';
		let token = 'Token ' + this.state.token;
		fetch(url, {
			method: 'PATCH',
			headers: {
				'Accept'       : 'application/json',
				'Content-Type' : 'application/json',
				'Authorization': token
			},
			body: JSON.stringify({
				first_name : this.state.first_name,
				last_name  : this.state.last_name,
				phone      : this.state.phone,
				email      : this.state.email,
			})
		})
		.then((response) => response.json())
		.then((responseData) => console.log(responseData))
	}

	render(){
		if (!this.state.account) {
			return <Text>Loading...</Text>;
		}
		console.log("state.first_name: ", this.state.first_name);
		return (
			<View style={styles.view}>
				<TextInput
					style                = {styles.textInput}
					placeholder          = "Ваше имя"
					placeholderTextColor = "#333"
					onChangeText         = {(value) => this.setState({first_name: value})}
					onEndEditing         = {(event) => this.setState({first_name: event.nativeEvent.text})}
					value                = {this.state.first_name}
				/>
				<TextInput
					style                = {styles.textInput}
					placeholder          = "Ваша фамилия"
					placeholderTextColor = "#333"
					onChangeText         = {(value) => this.setState({last_name: value})}
					onEndEditing         = {(event) => this.setState({last_name: event.nativeEvent.text})}
					value                = {this.state.last_name}
				/>
				<TextInput
					style                = {styles.textInput}
					placeholder          = "Ваш телефон"
					placeholderTextColor = "#333"
					onChangeText         = {(value) => this.setState({phone: value})}
					onEndEditing         = {(event) => this.setState({phone: event.nativeEvent.text})}
					value                = {this.state.phone}
				/>
				<TextInput
					style                = {styles.textInput}
					placeholder          = "Ваш email"
					placeholderTextColor = "#333"
					onChangeText         = {(value) => this.setState({email: value})}
					onEndEditing         = {(event) => this.setState({email: event.nativeEvent.text})}
					value                = {this.state.email}
				/>
				<BTN
					style={common_styles.btnLeft}
					onPress = {() => this._updateAccount()}
					text    = "Сохранить" />
			</View>
		);
	}
}

var deviceWidth = Dimensions.get('window').width;
var styles = StyleSheet.create({
	view: {
		marginBottom: 20
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
});
