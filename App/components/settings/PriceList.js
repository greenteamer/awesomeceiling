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
import style_button from '@appStyles/style.js';
import _ from 'lodash';


export default class PriceList extends Component {
	statics: {
		title: '<PriceList>',
		description: 'Performant, scrollable list of data.'
	}

	constructor(props) {
		super(props);
		this.state = {
		};
	}


	_renderRow(rowData: string, sectionID: number, rowID: number) {
		return (
			<View>
				<View style={styles.row}>
					<Text style={styles.text}>
						{rowData.key} - {rowData.value}
					</Text>
				</View>
			</View>
		);
	}

	render(){
		const { prices } = this.props;
		if (!prices) {
			return <Text>Loading...</Text>;
		}
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return (
			<ListView
				dataSource={ds.cloneWithRows(prices)}
				enableEmptySections={true}
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
