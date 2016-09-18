import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';
import RootRouter from './App/RootRouter.js'


class AwesomeCeiling extends Component {
	render() {
		return (
			<RootRouter />
		)
	}
}


AppRegistry.registerComponent('AwesomeCeiling', () => AwesomeCeiling);
