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
	Navigator
} from 'react-native';
import {Actions, Scene, Router, Route, Schema, Reducer} from 'react-native-router-flux';

import Login from './components/auth/Login.js';
import Register from './components/auth/Register.js';
import Profile from './components/auth/Profile.js';
import AppEventEmitter from './Services/AppEventEmitter';


const reducerCreate = params=>{
	const defaultReducer = Reducer(params);
	return (state, action)=>{
		console.log("ACTION:", action);
		return defaultReducer(state, action);
	}
};


export default class RootRouter extends Component {
	render() {
		return (
			<Router createReducer={reducerCreate}>
				<Scene key="root">
					<Scene 
						key="login" 
						component={Login} 
						hideNavBar={true}/>

					<Scene 
						key="profile" 
						component={Profile} 
						title="Profile"
						navigationBarStyle={{
							borderBottomColor: 'transparent', 
							borderBottomWidth: 65, 
							backgroundColor: 'white'}}/>
					
					
					<Scene 
						key="register" 
						component={Register} 
						title="Register" 
						hideNavBar={true}/>
				</Scene>
			</Router>
		)
	}
}
