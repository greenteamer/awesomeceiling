import React, {
	PropTypes,
	Component,
	View,
	Text,
	TouchableHighlight,
	StyleSheet
} from 'react-native';


export default class Project extends Component {
	render(){
		// console.log("Project props.onPress: ", this.props.onProjectPress)
		return(
			<TouchableHighlight onPress={this.props.onProjectPress}>
				<View>
					<View style={(this.props.rowID == 0) ? styles.firstRow : styles.row}>
						<Text style={styles.text}>
							{this.props.project.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}


Project.PropTypes = {
	onPress: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
}


var styles = StyleSheet.create({
	firstRow: {
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
	text: {
		flex: 1,
	},
});