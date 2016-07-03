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
import Icon from 'react-native-vector-icons/Ionicons';
import style_button from '../styles/style.js';
import _ from 'lodash';

export default class ContactList extends Component {
	statics: {
		title: '<ContactList>',
		description: 'Performant, scrollable list of data.'
	}

	constructor(props) {
		super(props);
		this.state = {
			materials: null,
			token: ''
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
				this.getCompany();
			} else {
				null
			}
		} catch (error) {
			null
		}
	}

	getCompany(){
		let url = config.domain + '/api/materials/';
		let token = 'Token ' + this.state.token;
		fetch(url, {
			headers: {
				'Authorization': token
			},
		})
		.then((response) => {
			let data = JSON.parse(response._bodyText);
			console.log('materials : ', data)
			let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.setState({
				materials: ds.cloneWithRows(data),
			});
		})
	}

	_renderRow(rowData: string, sectionID: number, rowID: number) {
		return (
			<View>
				<View style={styles.row}>
					<Text style={styles.text}>
						{rowData.name} - {rowData.width} - {rowData.price}
					</Text>
				</View>
			</View>
		);
	}

	render(){
		if (!this.state.materials) {
			return <Text>Loading...</Text>;
		}
		return (
			<ListView
				dataSource={this.state.materials}
				renderRow={this._renderRow}
				renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}/>
		);
	}
}


var styles = StyleSheet.create({
	firstRow: {
		marginTop: -20,
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#fff',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#fff',
	},
	separator: {
		height: 1,
		backgroundColor: '#CCCCCC',
	},
	thumb: {
		width: 64,
		height: 64,
	},
	text: {
		flex: 1,
	},
	topTabBar: {
		backgroundColor: "#191f28",
		flex: 1,
	flexDirection:'row',
	},
	topTabBarItem: {
		flex: 0.33,
	},
	topTabBarText: {
		flex: 0.33,
		textAlign:'center',
		color: "#fff",
		padding: 10,
		fontSize: 12,
		color: '#b3bdc2'
	},
	topTabBarTextSelected: {
		color: '#06bebd'
	}
});
