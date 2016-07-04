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
		// 	let newDog = realm.create('Dog', {name: 'Rex'});
		// 	newDog.name = 'Dog';
		// });

		// let dogs = realm.objects('Dog');
		// console.log(`****** Dog in Realm: ${dogs.length}`);

		// realm.write( () => {
		// 	let dogs = realm.objects('Dog');
		// 	// realm.delete(dogs);
		// });

		// console.log(`last check ${dogs.length}`);

		return (
			<RootRouter />
		)
	}
}


AppRegistry.registerComponent('AwesomeCeiling', () => AwesomeCeiling);
