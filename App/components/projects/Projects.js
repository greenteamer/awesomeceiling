'use strict'; 
import React, {
	PropTypes,
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
import {Actions, Reducer} from 'react-native-router-flux';
import { connect } from 'react-redux';
import {addProjectAction} from '../../actions'
// import {store} from '../../ceilingStore.js';


// const reducerCreate = params=>{
//     const defaultReducer = Reducer(params);
//     return (state, action)=>{
//         console.log("ACTION2:", action);
//         return defaultReducer(state, action);
//     }
// };


class Projects extends Component {
	static propTypes = {
    projectsState: PropTypes.object,
  };

	statics: {
		title: '<ListView>',
		description: 'Performant, scrollable list of data.'
	}

	constructor(props) {
		super(props);
		console.log("Projects constructor dispatch: ", this.props.dispatch);
		// var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		// let items = (this.props.projectsState) ? this.props.projectsState.items : null
		// let dataSource = ds.cloneWithRows(items);
		// this.state = {
		// 	dataSource: dataSource,
		// 	token: '',
		// };
		this.state = {
			dataSource: null,
			token: '',
		};
	}

	componentWillMount(){
		// this._pressData = {};
		// setTimeout(() => {
			this.getProjects()
		// }, 1);
	}
	// _pressData(){
	// 	return ({}: {[key: number]: boolean})	
	// }

	// componentDidMount(){
	// 	// this._loadInitialState().done();
	// 	setTimeout(() => {
	// 		this.getProjects()
	// 	}, 1);
	// }

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

	onAddProject(){
		// console.log("onAddProject this: ", this)
		addProjectAction({name: 'add project name test'})
	}

	getProjects(){
		// let url = config.domain + '/api/projects/';
		// let token = 'Token ' + this.state.token
		// fetch(url, {
		// 	headers: {
		// 		'Authorization': token
		// 	},
		// })
		// .then((response) => response.json())
		// .then((responseData) => {
		// 	var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		// 	console.log("Projects getProjects responseData: ", responseData);
		// 	this.setState({
		// 			dataSource: ds.cloneWithRows(responseData),
		// 	});
		// })
		console.log("Projects getProjects this.state: ", this.state);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		let items = (this.props.projects) ? this.props.projects.items : null;
		console.log("Projects getProjects items: ", items);
		this.setState({
			dataSource: ds.cloneWithRows(items),
			token: '',
		})
	}

	render(){
		console.log("Projects render this.state: ", this.state);
		var titleConfig = {
			title: 'Проекты',
			tintColor: '#fff'
		};
		var leftButton = (
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
		var rightButton = (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={()=> this.onAddProject()}
				style={style_button.btnSmall}>
				<Icon 
					name="ios-plus" 
					size={25} 
					color="#06bebd"/>
			</TouchableHighlight>
		)
		if (!this.state.dataSource) {
	  return <Text>Loading...</Text>;
	}
		return (
			<View style={styles.view}>
				<NavigationBar
					title={titleConfig}
					leftButton={leftButton}
					rightButton={rightButton}
					tintColor="#2c3239"
					statusBar={{style:'light-content'}}/>
				<ListView
					style={styles.listView}
					dataSource={this.state.dataSource}
					renderRow={this._renderRow}
					renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}/>
			</View>
		);
	}

	_renderRow(rowData: string, sectionID: number, rowID: number) {
		return (
			<TouchableHighlight onPress={() => Actions.projectDetail({project: rowData})}>
				<View>
					<View style={styles.row}>
						<Text style={styles.text}>
							{rowData.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
}


export default connect(({projectsState}) => ({projectsState}))(Projects);


var styles = StyleSheet.create({
	view:{
		flex: 1,
		marginTop: 0
	},
	listView: {
		marginTop: -20
	},
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

