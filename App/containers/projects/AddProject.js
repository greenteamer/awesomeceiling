'use strict';
import React, { Component } from 'react';
import {
	ListView,
	PropTypes,
	AsyncStorage,
	View,
	Text,
	Image,
	TextInput,
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableHighlight
} from 'react-native';


import style_button from '@appStyles/style.js';
import ProjectForm from '@appComponents/projects/ProjectForm.js';
import ProjectList from '@appComponents/projects/Projectlist.js';
import Nav from '@appComponents/widgets/Nav.js';
import {Actions} from 'react-native-router-flux';

import { connect } from 'react-redux'
import { addProjectAction } from '@actions';


class Projects extends Component {
	render(){
		const { dispatch, projects } = this.props;
		return (
			<View style={styles.container}>
				<Nav
					title="Создание проекта"
					leftIconName="ios-close"
					onLeftButtonPress={this.onLeftButtonPress}/>
				<ScrollView>
					<ProjectForm
						onAddPress={(project) => dispatch(addProjectAction(project))}/>
				</ScrollView>
			</View>
		);
	}

	onRightButtonPress(){
		console.log("AddProjects onRightButtonPress start");
	}

	onLeftButtonPress(){
		console.log("AddProjects onLeftButtonPress start");
		Actions.pop()
	}
}


// Projects.PropTypes = {
// 	projects: PropTypes.shape({
// 		items: PropTypes.arrayOf(PropTypes.shape({
// 			name: PropTypes.string.isRequired
// 		}).isRequired).isRequired
// 	})
// }


// Какие именно props мы хотим получить из приходящего, как аргумент глобального состояния?
// Обратите внимание: используйте https://github.com/faassen/reselect для лучшей производительности.
function select(state) {
	// console.log("Home select function state: ", state);
  return {
    projects: state.projects,
    routes: state.routes
  }
}

// Оборачиваем компонент `App` для внедрения в него функции `dispatch` и состояния
export default connect(select)(Projects)


var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 0
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
