import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';
import RootRouter from './App/RootRouter.js'
import { realm, Sequence } from '@appSchema';

// test();

class AwesomeCeiling extends Component {
	render() {
		// console.log('Sequences: ', realm.objects('Sequence'));
		// realm.write( ()=> {
		// 	realm.delete(realm.objects('User'));
		// });

		// console.log('Users: ', realm.objects('User'));
		// console.log('Projects: ', realm.objects('Project'));
		return (
			<RootRouter />
		)
	}
}


AppRegistry.registerComponent('AwesomeCeiling', () => AwesomeCeiling);
