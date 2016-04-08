import {
	StyleSheet,
	sozdanie
} from 'react-native';

var primary = require('./variable.js').brandPrimary;
var secondary = require('./variable.js').brandSecondary;

var colors = require('./variable.js');

export default StyleSheet.create({
	container: {
		flex: 1,
		width: null,
		height: null,
	},
	shadow: {
		flex: 1,
		width: null,
		height: null,
		backgroundColor: 'transparent'
	},
	shadow2: {
		flex: 1,
		width: null,
		height: null,
		backgroundColor: 'transparent',
		marginTop: -35
	},
	color: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: primary
	},
	borderBottom: {
		position:'relative',
		borderColor: 'white', 
		borderWidth: 0.8, 
		borderTopWidth: 0, 
		borderRightWidth: 0, 
		borderLeftWidth: 0, 
		margin: 15, 
		marginTop: 5,
	},
	textInput: {
		height: 40, 
		backgroundColor: 'transparent',
		color: 'rgba(255, 255, 255, 0.9)',
		paddingLeft: 10,
	},
	bg : {
		flex: 1,
		marginTop: 45,
		backgroundColor: secondary,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 30,
		bottom: 0
	},
	abg : {
		flex: 1,
		marginTop: 45,
		backgroundColor: secondary,
		paddingTop: 30,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 30
	},
	loginLogo: {
		width: 100,
	},
	background: {
		flex: 1,
		resizeMode: 'stretch'
	},
	logo: {
		marginBottom: 50,
		marginTop: -20,
		height: 150,
		width: 150,
		alignSelf: 'center'
	},
	navbar: {
		borderBottomColor: 'transparent',
	}
});