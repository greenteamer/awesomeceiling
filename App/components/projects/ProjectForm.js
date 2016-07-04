import React, { Component } from 'react';
import {
	PropTypes,
	View,
	TextInput,
	StyleSheet,
	Dimensions} from 'react-native';
import BTN from '@appComponents/widgets/BTN.js';

export default class ProjectForm extends Component {
	render(){
		return(
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
					style   = {styles.btnCenter}
					onPress = {e => this.handleClick(e)}
					text    = "Сохранить" />
			</View>
		)
	}

	handleClick(e){
		console.log("AddProject handleClick start state: ", this.state);
		this.props.onAddPress({
			name    : this.state.name,
			address : this.state.address,
			phone   : this.state.phone,
			email   : this.state.email,
			price   : this.state.price,
			text    : this.state.text,
		})
	}

	constructor(props) {
		super(props);
		this.state = {
			project : null,
			name    : "",
			address : "",
			phone   : "",
			email   : "",
			price   : "",
			text    : "",
		}
	}
}


// ProjectForm.PropTypes = {
// 	onAddPress: PropTypes.func.isRequired
// }


var deviceWidth = Dimensions.get('window').width;
var styles = StyleSheet.create({
	view: {
		// marginBottom: 20
		padding: 10
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
	btnLeft: {
		backgroundColor: '#06bebd',
		padding: 5,
		borderColor: 'transparent',
		borderWidth: 1,
		borderRadius: 20,
		width: deviceWidth-150,
		height: 35
	},
	btnCenter: {
		backgroundColor: '#06bebd',
		padding: 10,
		borderColor: 'transparent',
		borderWidth: 1,
		alignSelf: 'center',
		borderRadius: 25,
		width: deviceWidth-20,
		height: 45
	},
});
