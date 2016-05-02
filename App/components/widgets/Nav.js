import React, {
	Component,
	TouchableHighlight,
	StyleSheet
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Nav extends Component {
	render(){
		console.log("Nav render this.props: ", this.props)
		var titleConfig = {
			title: this.props.title,
			tintColor: '#fff'
		};
		let leftButton = (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={this.props.onLeftButtonPress}
				style={styles.btnSmall}>
				<Icon 
					name={this.props.leftIconName ? this.props.leftIconName : "ios-arrow-left"} 
					size={25} 
					color="#06bebd"/>
			</TouchableHighlight>
		)
		var rightButton = (
			<TouchableHighlight
				underlayColor="transparent"
				onPress={this.props.onRightButtonPress}
				style={styles.btnSmall}>
				<Icon 
					name={this.props.rightIconName ? this.props.rightIconName : "ios-plus"} 
					size={25} 
					color="#06bebd"/>
			</TouchableHighlight>
		)
		return(
			<NavigationBar
					title={titleConfig}
					leftButton={ this.props.onLeftButtonPress ? leftButton : undefined }
					rightButton={ this.props.onRightButtonPress ? rightButton : undefined }
					tintColor="#2c3239"
					statusBar={{style:'light-content'}}/>
		)
	}
}


const styles = StyleSheet.create({
	btnSmall: {
		paddingLeft: 20,
		paddingRight: 20,
		alignSelf: 'center',
		margin: 10,
		height: 25
	},
})