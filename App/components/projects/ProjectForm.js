'use strict'; 
import React, {
	ListView,
	AsyncStorage,
	Component,
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
			token   : "",
			project : (this.props.project) ? this.props.project         : null,
			name    : (this.props.project) ? this.props.project.name    : '',
			address : (this.props.project) ? this.props.project.address : '',
			phone   : (this.props.project) ? this.props.project.phone   : '',
			email   : (this.props.project) ? this.props.project.email   : '',
			price   : (this.props.project) ? this.props.project.price   : 0,
			text    : (this.props.project) ? this.props.project.text    : '',
		}
	}

	componentDidMount(){
		this._loadInitialState().done();
	}

	async _loadInitialState() {
		try {
			var value = await AsyncStorage.getItem("token");
			if (value !== null){
				this.setState({token: value});
			} else {
				null
			}
		} catch (error) {
			null
		}
	}

	_updateProject(){
		let url = config.domain + '/api/projects/' + this.props.project.id + '/';
		let token = 'Token ' + this.state.token;
		fetch(url, {
			method: 'PATCH',
			headers: {
				'Accept'       : 'application/json',
				'Content-Type' : 'application/json',
				'Authorization': token
			},
			body: JSON.stringify({
				name    : this.state.name,
				address : this.state.address,
				phone   : this.state.phone,
				email   : this.state.email,
				price   : this.state.price,
				text    : this.state.text
			})
		})
		.then((response) => response.json())
		.then((responseData) => {

		})
	}

	render(){
		return (
			<View style={styles.view}>
				<TextInput
					style                = {styles.textInput}
					placeholder          = "Название проекта"
					placeholderTextColor = "#333"
					onChangeText         = {(value) => this.setState({name: value})}
					onEndEditing         = {(event) => this.setState({name: event.nativeEvent.text})}
					value                = {this.state.name}
				/>
				<TextInput
					style                = {styles.textInput}
					placeholder          = "Адрес"
					placeholderTextColor = "#333"
					onChangeText         = {(value) => this.setState({address: value})}
					onEndEditing         = {(event) => this.setState({address: event.nativeEvent.text})}
					value                = {this.state.address}
				/>
				<TextInput
					style                = {styles.textInput}
					placeholder          = "Телефон"
					placeholderTextColor = "#333"
					onChangeText         = {(value) => this.setState({phone: value})}
					onEndEditing         = {(event) => this.setState({phone: event.nativeEvent.text})}
					value                = {this.state.phone}
				/>
				<TextInput
					style                = {styles.textInput}
					placeholder          = "Email"
					placeholderTextColor = "#333"
					onChangeText         = {(value) => this.setState({email: value})}
					onEndEditing         = {(event) => this.setState({email: event.nativeEvent.text})}
					value                = {this.state.email}
				/>
				<BTN
					style={common_styles.btnLeft}
					onPress = {() => this._updateProject()}
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
