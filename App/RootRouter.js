/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View,
	Navigator,
	NavigatorIOS,
	AsyncStorage
} from 'react-native';
import {Actions, Scene, Router, Route, Schema, Reducer, NavBar} from 'react-native-router-flux';

import NavigationBar   from 'react-native-navbar';
import Login           from './components/auth/Login.js';
import Register        from './components/auth/Register.js';
import Profile         from './components/auth/Profile.js';
import MainTabBar      from './components/layouts/MainTabBar.js';
import Settings        from './components/projects/Settings.js';
import ProjectDetail   from './components/projects/ProjectDetail.js';
import ProjectForm     from './components/projects/ProjectForm.js';
import AppEventEmitter from './Services/AppEventEmitter';


const reducerCreate = params=>{
	const defaultReducer = Reducer(params);
	return (state, action)=>{
		console.log("ACTION:", action);
		return defaultReducer(state, action);
	}
};


export default class RootRouter extends Component {
	componentDidMount(){
		this._loadInitialState().done();
	}

	async _loadInitialState() {
		try {
			var value = await AsyncStorage.getItem("token");
			if (value !== null){
				this.setState({token: value});
				console.log('RootRouter Recovered selection from disk: ' + value);
			} else {
				console.log('RootRouter Initialized with no selection on disk.');
				Actions.login();
			}
		} catch (error) {
			console.log('RootRouter AsyncStorage error: ' + error.message);
		}
	}

	render() {
		return (
			<Router createReducer={reducerCreate}>
				<Scene key="root">

					<Scene 
						key="MainTabBar" 
						title="MainTabBar"
						hideNavBar={true}
						component={MainTabBar}/>

					<Scene 
						key="profile" 
						component={Profile} 
						title="Profile"
						hideNavBar={true}/>

					<Scene 
						key="register" 
						component={Register} 
						title="Register" 
						hideNavBar={true}/>

					<Scene 
						key="login" 
						component={Login}
						hideNavBar={true}/>

					<Scene 
						key="settings" 
						component={Settings}
						hideNavBar={true}/>

					<Scene 
						key="projectDetail" 
						component={ProjectDetail}
						hideNavBar={true}/>

				</Scene>
			</Router>
		)
	}
}
