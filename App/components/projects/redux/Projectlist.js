import React, {
	PropTypes,
	Component,
	View,
	Text,
	ScrollView,
	ListView,
	StyleSheet
} from 'react-native';
import Project from './Project.js';
import {Actions} from 'react-native-router-flux';

export default class Projectlist extends Component {
	render(){
		// create project items list and render
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		let items = (this.props.projects) ? this.props.projects.items : null;
		let dataSource =  ds.cloneWithRows(items);
		return(
				<ListView
					style={styles.listView}
					dataSource={dataSource}
					renderRow={this._renderRow.bind(this)}
					renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}/>
		)
	}

	_renderRow(rowData: string, sectionID: number, rowID: number) {
		// console.log("Projectlist _renderRow this.onPressProject: ", this.onPressProject)
		return (
			<Project
				onProjectPress={() => this.props.onProjectPress(rowData, rowID)}
				project={rowData}
				rowID={rowID}/>
		);
	}
}


Projectlist.PropTypes = {
	projects: PropTypes.shape({
		items: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired
		}).isRequired).isRequired
	})
}


var styles = StyleSheet.create({
	listView: {
		flex: 1,
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