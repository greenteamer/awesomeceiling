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
	TouchableHighlight
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import style_button from '../styles/style.js';


export default class Home extends Component {
	statics: {
		title: '<Home>',
		description: 'Performant, scrollable list of data.'
	}

	constructor(props) {
		super(props);
		this.state = {
			dataSource: null,
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
				this.getProjects(); // get projects after we got a key
			} else {
				null
			}
		} catch (error) {
			null
		}
	}

	getProjects(){
		// console.log("Login get projects func start")
		let url = config.domain + '/api/projects/';
		let token = 'Token ' + this.state.token
		fetch(url, {
			headers: {
				'Authorization': token
			},
		})
		.then((response) => response.json())
		.then((responseData) => {
			var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			this.setState({
					dataSource: ds.cloneWithRows(responseData),
			});
		})
	}

	_pressData(){
		return ({}: {[key: number]: boolean})	
	}

	componentWillMount(){
		this._pressData = {};
	}

	render(){
		var titleConfig = {
			title: 'Home page',
			tintColor: '#fff'
		};
		var rightButton = (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={()=> this.getProjects()}
				style={style_button.btnSmall}>
				<Icon 
					name="ios-loop-strong" 
					size={25} 
					color="#06bebd"/>
			</TouchableHighlight>
		)
		if (!this.state.dataSource) {
	  return <Text>Loading...</Text>;
	}
		return (
			<View>
				<NavigationBar
					title={titleConfig}
					rightButton={rightButton}
					tintColor="#2c3239"
					statusBar={{style:'light-content'}}/>
				<Text>Home page</Text>
			</View>
		);
	}

	_renderRow(rowData: string, sectionID: number, rowID: number) {
		// console.log("row id: ", rowID);
		return (
			<TouchableHighlight onPress={() => console.log("row Id: ", rowID)}>
				<View>
					<View style={styles.row}>
						<Text style={styles.text}
							source={{html: rowData.text}}>
							{rowData.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
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
});
