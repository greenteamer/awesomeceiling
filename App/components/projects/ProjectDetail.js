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
	TouchableHighlight
} from 'react-native';
import _             from 'lodash';
import NavigationBar from 'react-native-navbar';
import ProjectForm   from './ProjectForm.js';
import Icon          from 'react-native-vector-icons/Ionicons';
import style_button  from '../styles/style.js';
import {Actions}     from 'react-native-router-flux';


export default class ListViewSimpleExample extends Component {
	statics: {
		title: '<ListView>',
		description: 'Performant, scrollable list of data.'
	}

	constructor(props) {
		super(props);
		this.state = {
			token: '',
		};
	}

	componentDidMount(){
		this._loadInitialState().done();
	}

	async _loadInitialState() {
		try {
			var token_value = await AsyncStorage.getItem("token");
			if (token_value !== null){
				this.setState({token: token_value});
			} else {
				null
			}
		} catch (error) {
			null
		}
	}



	_pressData(){
		return ({}: {[key: number]: boolean})
	}

	componentWillMount(){
		this._pressData = {};
		console.log("project detail componentWillMount props: ", this.props);
	}

	render(){
		var titleConfig = {
			title: (this.props.project) ? this.props.project.name : '',
			tintColor: '#fff'
		};
		let leftButton = (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={()=> Actions.pop()}
				style={style_button.btnSmall}>
				<Icon
					name="ios-arrow-left"
					size={25}
					color="#06bebd"/>
			</TouchableHighlight>
		)
		let rightButton = (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={()=> this.saveProject()}
				style={style_button.btnSmall}>
				<Icon
					name="ios-checkmark"
					size={25}
					color="#06bebd"/>
			</TouchableHighlight>
		)
		return (
			<View>
				<NavigationBar
					title={titleConfig}
					leftButton={leftButton}
					rightButton={rightButton}
					tintColor="#2c3239"
					statusBar={{style:'light-content'}}/>
				<View style={styles.view}>
					<ProjectForm
						project={this.props.project}
						propFunc={this.props.propFunc}/>
				</View>
				<View style={styles.separator}></View>
			</View>
		);
	}
}


var styles = StyleSheet.create({
	view:{
		padding: 10
	},
	separator: {
		height: 1,
		backgroundColor: '#CCCCCC',
	},
});
