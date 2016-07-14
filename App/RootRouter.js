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
import { Actions } from 'react-native-router-flux';
import { Router, Scene } from 'react-native-mobx';


import Login           from '@appContainers/auth/Login.js';
import Register        from '@appContainers/auth/Register.js';
import Profile         from '@appContainers/auth/Profile.js';
import MainTabBar      from '@appContainers/MainTabBar.js';
import { Projects, ProjectDetail, AddProject, AddPlot } from '@appContainers/projects';
import Settings        from '@appContainers/settings/Settings.js';

import { CeilingStore, AuthStore } from '@appStore';


export default class RootRouter extends Component {

	render() {
		// console.log('***** router CeilingStore.projects: ', CeilingStore.projects);
		return (
			<Router ceilingStore={CeilingStore}>
				<Scene key="root" hideNavBar>
					<Scene key="auth" direction="vertical" hideNavBar>
						<Scene key="login" component={Login} title="Login" />
						<Scene key="register" component={Register} title="Register" />
					</Scene>
					<Scene key="MainTabBar" title="MainTabBar" component={MainTabBar} />
					<Scene key="settings" component={Settings} title="Settings"/>
					<Scene key="projects" component={Projects} title="Projects"/>
					<Scene key="addProject" component={AddProject} direction="vertical" />
					<Scene key="addPlot" component={AddPlot} />
					<Scene key="projectDetail" component={ProjectDetail} title="ProjectDetail" />
				</Scene>
			</Router>
		)
	}
}
