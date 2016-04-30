import {
	StyleSheet,
	sozdanie,
	Dimensions
} from 'react-native';

var primary = require('./variable.js').brandPrimary;
var secondary = require('./variable.js').brandSecondary;

var colors = require('./variable.js');

var deviceWidth = Dimensions.get('window').width;
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
		borderBottomColor: 'red',
	},
	// TEXT
	h1Center: {
		textAlign: 'center',
		color: '#3c4350',
		alignSelf: 'center',
		fontSize: 25,
		marginBottom: 10
	},
	textCenter: {
		textAlign: 'center',
		color: '#96999a',
		alignSelf: 'center',
		marginBottom: 10,
		fontSize: 12,
		width: deviceWidth-100,
	},
	// BUTTONS
	btnBig: {
		backgroundColor: '#06bebd',
		padding: 15,
		borderColor: 'transparent',
		borderWidth:2,
		alignSelf: 'center',
		borderRadius: 30,
		width: deviceWidth-100,
		height: 55
	},
	btnCenter: {
		backgroundColor: '#06bebd',
		padding: 5,
		borderColor: 'transparent',
		borderWidth: 1,
		alignSelf: 'center',
		borderRadius: 20,
		width: deviceWidth-150,
		height: 35
	},
	btnRight: {
		backgroundColor: '#06bebd',
		padding: 5,
		borderColor: 'transparent',
		borderWidth: 1,
		alignSelf: 'flex-end',
		borderRadius: 20,
		width: deviceWidth-150,
		height: 35
	},
	btnLeft: {
		backgroundColor: '#06bebd',
		padding: 5,
		borderColor: 'transparent',
		borderWidth: 1,
		borderRadius: 20,
		width: deviceWidth-150,
		height: 35
	},
	btnSmall: {
		// backgroundColor: '#06bebd',
		paddingLeft: 20,
		paddingRight: 20,
		// borderColor: 'transparent',
		// borderWidth: 0,
		alignSelf: 'center',
		// borderRadius: 15,
		margin: 10,
		height: 25
	},
	btnText: {
		color: '#fff',
		alignSelf: 'center',
		fontSize: 16
	},
	// FORM
	formGroup: {
		marginBottom: 25
	},
	textInput: {
		height: 40, 
		fontSize: 12,
		width: deviceWidth-100,
		textAlign: 'center',
		alignSelf: 'center',
		backgroundColor: '#f7f7f8',
		color: '#696d6f',
		paddingLeft: 10,
		marginBottom: 12
	},
});