import Lightbox from 'react-native-lightbox'
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
  TouchableHighlight,
} from 'react-native'
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import style_button from '@appStyles/style.js';
import ProjectForm from '@appComponents/projects/ProjectForm.js';
import ProjectList from '@appComponents/projects/Projectlist.js';

import {Actions} from 'react-native-router-flux';

import { connect } from 'react-redux'


class Home extends Component {
	statics: {
		title: '<Home>',
		description: 'Performant, scrollable list of data.'
	}

	render(){
		console.log("Home render this.props: ", this.props);
		const { dispatch, projects } = this.props;
		var titleConfig = {
			title: 'Home page',
			tintColor: '#fff'
		};
		var rightButton = (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={()=> Actions.addProject()}
				style={style_button.btnSmall}>
				<Icon
					name="ios-add"
					size={25}
					color="#06bebd"/>
			</TouchableHighlight>
		);
		return (
			<View style={styles.container}>
				<NavigationBar
					title={titleConfig}
					rightButton={rightButton}
					tintColor="#2c3239"
					statusBar={{style:'light-content'}}/>
				<ScrollView>
					<ProjectForm
						onAddPress={(project) => dispatch(addProjectAction(project))}/>
					<ProjectList
						projects={projects}
						onProjectPress={this.onProjectPress.bind(this)}/>
				</ScrollView>
			</View>
		);
	}

	onProjectPress(project, rowID){
		Actions.projectDetail({project: project})
	}
}


// Home.PropTypes = {
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
    routes: state.routes,
  }
}

// Оборачиваем компонент `App` для внедрения в него функции `dispatch` и состояния
export default connect(select)(Home)


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
