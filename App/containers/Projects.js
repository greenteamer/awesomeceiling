'use strict'; 
import React, {
	ListView,
	PropTypes,
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


import style_button from '../components/styles/style.js';
import ProjectForm from '../components/projects/redux/ProjectForm.js';
import ProjectList from '../components/projects/redux/Projectlist.js';
import Nav from '../components/widgets/Nav.js';
import {Actions} from 'react-native-router-flux';

import { connect } from 'react-redux'
import {addProjectAction} from '../actions';


class Projects extends Component {
	render(){
		const { dispatch, projects } = this.props;
		return (
			<View style={styles.container}>
				<Nav 
					title="Проекты"
					onRightButtonPress={this.onRightButtonPress}/>
				<ScrollView>
					<ProjectList 
						projects={projects}
						onProjectPress={this.onProjectPress.bind(this)}/>
				</ScrollView>
			</View>
		);
	}

	onRightButtonPress(){
		console.log("Projects onRightButtonPress start");
		Actions.addProject()
	}

	onProjectPress(project, rowID){
		console.log("Home onProjectPress start")
		Actions.projectDetail({project: project})
	}
}


Projects.PropTypes = {
	projects: PropTypes.shape({
		items: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired
		}).isRequired).isRequired
	})
}


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
