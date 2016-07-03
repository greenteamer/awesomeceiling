/* @flow */
'use strict';
import React, { Component } from 'react';
import {
	Text,
	View,
	ScrollView,
	StyleSheet,
	TabBarIOS,
	TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../components/auth/Login.js';
import Register from '../components/auth/Register.js';
import Profile from './Profile.js';
import Projects from './Projects.js';
import Settings from './Settings.js';
import Home from './Home.js'
import {Actions} from 'react-native-router-flux'


var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';
const profileIcon = () => (
	<Icon name="ios-person" size={30} color="#ffffff" />
);

export default class MainTabBar extends Component {
	statics: {
		title: '<TabBarIOS>',
		description: 'Tab-based navigation.',
	}

	displayName: 'TabBarExample'

	constructor(props){
		super(props);
		this.state = {
			selectedTab: (this.props.currentTab) ? this.props.currentTab : 'profile'
		}
	}

	_renderContent(color: string, pageText: string, num?: number) {
		return (
			<View style={[styles.tabContent, {backgroundColor: color}]}>
				<Text style={styles.tabText}>{pageText}</Text>
				<Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
			</View>
		);
	}

	render() {
		// console.log("main tab bar render props: ", this.props)
		return (
			<TabBarIOS
				tintColor="#fff"
				barTintColor="#191f28">
				<Icon.TabBarItem
					title="Home"
					iconName="ios-home-outline"
					selectedIconName="ios-home"
					selected={this.state.selectedTab === 'home'}
					onPress={() => {
						this.setState({
							selectedTab: 'home',
						});
					}}>
					<Home />
				</Icon.TabBarItem>
				<Icon.TabBarItem
					title="Профиль"
					iconName="ios-person-outline"
					selectedIconName="ios-person"
					selected={this.state.selectedTab === 'profile'}
					onPress={() => {
						this.setState({
							selectedTab: 'profile',
						});
					}}>
					<Profile />
				</Icon.TabBarItem>
				<Icon.TabBarItem
					title="Настройки"
					iconName="ios-gear-outline"
					selectedIconName="ios-gear"
					selected={this.state.selectedTab === 'settings'}
					onPress={() => {
						this.setState({
							selectedTab: 'settings',
						});
					}}>
					<Settings/>
				</Icon.TabBarItem>
				<Icon.TabBarItem
					title="Проекты"
					iconName="ios-briefcase-outline"
					selectedIconName="ios-briefcase"
					selected={this.state.selectedTab === 'projects'}
					onPress={() => {
						this.setState({
							selectedTab: 'projects',
						});
					}}>
					<Projects/>
				</Icon.TabBarItem>
			</TabBarIOS>
		);
	}
}


var styles = StyleSheet.create({
	tabContent: {
		flex: 1,
		alignItems: 'center',
	},
	tabText: {
		color: 'white',
		margin: 50,
	},
});
