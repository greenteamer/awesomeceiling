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
import Icon from 'react-native-vector-icons/Ionicons';
import style_button from '../components/styles/style.js';
import PriceList from '../components/projects/PriceList.js';
import ContactList from '../components/projects/ContactList.js';
import MaterialList from '../components/projects/MaterialList.js';

export default class Settings extends Component {
	statics: {
		title: '<SettingsView>',
		description: 'Performant, scrollable list of data.'
	}

	constructor(props) {
		super(props);
		this.state = {
			token: '',
			currentTab: 'price'
		};
	}

	_setCurrentTab(currentTab){
		this.setState({
			currentTab: currentTab
		})
	}

	_renderTab(){
		console.log('this state currentTab: ', this.state.currentTab)
		if (!this.state.currentTab) {
			return <Text>Нет данных</Text>
		}
		if (this.state.currentTab == 'price') {
			return (
				<PriceList />
			)
		}
		if (this.state.currentTab == 'contacts') {
			return (
				<ContactList />
			)
		}
		if (this.state.currentTab == 'materials') {
			return (
				<MaterialList />
			)
		}
	}

	render(){
		let titleConfig = {
			title: 'Настройки',
			tintColor: '#fff'
		};
		if (!this.state.currentTab) {
		return <Text>Loading...</Text>;
	}
		return (
			<View>
				<NavigationBar
					title={titleConfig}
					tintColor="#2c3239"
					statusBar={{style:'light-content'}}/>
				<View style={styles.topTabBar}>
					<TouchableHighlight
						onPress={()=> this._setCurrentTab('price')}
						style={styles.topTabBarItem}>
						<Text 
							style={(this.state.currentTab == 'price') ? styles.topTabBarTextSelected : styles.topTabBarText}>
							Цены</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={()=> this._setCurrentTab('contacts')}
						style={styles.topTabBarItem}>
						<Text 
							style={(this.state.currentTab == 'contacts') ? styles.topTabBarTextSelected : styles.topTabBarText}>
							Контакты</Text>
					</TouchableHighlight>
					<TouchableHighlight
						onPress={()=> this._setCurrentTab('materials')}
						style={styles.topTabBarItem}>
						<Text 
							style={(this.state.currentTab == 'materials') ? styles.topTabBarTextSelected : styles.topTabBarText}>
							Материалы</Text>
					</TouchableHighlight>
				</View>
				{this._renderTab()}
			</View>
		);
	}
}


var styles = StyleSheet.create({
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
		padding: 10,
		fontSize: 12,
		color: '#b3bdc2'
	},
	topTabBarTextSelected: {
		color: '#06bebd',
		flex: 0.33,
		textAlign:'center',
		padding: 10,
		fontSize: 12
	}
});
