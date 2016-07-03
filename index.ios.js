import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';
import RootRouter from './App/RootRouter.js'
// const Realm = require('realm');


class AwesomeCeiling extends Component {
	render() {
		// let realm = new Realm({
		// 	schema: [{name: 'Dog', properties: {name: 'string'}}]
		// });
		// realm.write(() => {
		// 	realm.create('Dog', {name: 'Rex'});
		// });
		// console.log('Count of Dogs in Realm: ', realm.objects('Dog').length);
		return (
			<RootRouter />
		)
	}
}


AppRegistry.registerComponent('AwesomeCeiling', () => AwesomeCeiling);
