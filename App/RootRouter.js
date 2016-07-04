/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	NavigatorIOS,
	AsyncStorage
} from 'react-native';
import {Actions, Scene, Router, Route, Schema, Modal, Reducer, NavBar} from 'react-native-router-flux';

import NavigationBar   from 'react-native-navbar';


import Login           from '@appContainers/auth/Login.js';
import Register        from '@appContainers/auth/Register.js';
import Profile         from '@appContainers/auth/Profile.js';
import MainTabBar      from '@appContainers/MainTabBar.js';
import Projects 			 from '@appContainers/projects/Projects.js';
import ProjectDetail   from '@appContainers/projects/ProjectDetail.js';
import AddProject 		 from '@appContainers/projects/AddProject.js';
import Settings        from '@appContainers/settings/Settings.js';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';

const RouterWithRedux = connect()(Router);
import {store} from '@appStore/ceilingStore.js';

// create store...


// const reducerCreate = params=>{
// 	const defaultReducer = Reducer(params);
// 	return (state, action)=>{
// 		console.log("ACTION:", action);
// 		return defaultReducer(state, action);
// 	}
// };


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
				// console.log('RootRouter Initialized with no selection on disk.');
				Actions.auth();
			}
		} catch (error) {
			console.log('RootRouter AsyncStorage error: ' + error.message);
		}
	}

	render() {
		return (
			<Provider store={store}>
				<RouterWithRedux>
					<Scene key="root" hideNavBar>
						<Scene key="MainTabBar" title="MainTabBar" component={MainTabBar} />
						<Scene key="auth" direction="vertical" hideNavBar>
							<Scene key="profile" component={Profile} title="Profile" />
							<Scene key="login" component={Login} title="Login" />
							<Scene key="register" component={Register} title="Register" />
						</Scene>
						<Scene key="settings" component={Settings} title="Settings"/>
						<Scene key="projects" component={Projects} title="Projects"/>
						<Scene key="addProject" component={AddProject} direction="vertical" />
						<Scene key="projectDetail" component={ProjectDetail} title="ProjectDetail" />
					</Scene>
				</RouterWithRedux>
			</Provider>
		)
	}
}
