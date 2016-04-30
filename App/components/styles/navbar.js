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
	
	navbar: {
		borderBottomColor: 'transparent',
		backgroundColor: '#2b3139',
	},
	
});