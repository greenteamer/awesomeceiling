/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	Text,
	View
} from 'react-native';
import App from './App/App.js'

class AwesomeCeiling extends Component {
	render() {
		return (
			<App />
		);
	}
}


AppRegistry.registerComponent('AwesomeCeiling', () => AwesomeCeiling);
