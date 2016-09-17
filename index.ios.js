import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';


import RootRouter from './App/RootRouter.js'
import { realm, Sequence } from '@appSchema';


import Backendless from 'backendless';

var APPLICATION_ID = '548CAC57-3A1A-8188-FF10-75E28B641A00',
  SECRET_KEY = '95EC9871-2FA0-ADBB-FFB6-B2B7A509CB00',
  VERSION = 'v1'; //default application version;
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);

function result(data) {
  console.log("result data: ", data);
}
function gotError(err) {
  console.log("error message - " + err.message);
  console.log("error code - " + err.statusCode);
}

class Product {
	constructor() {
	  this.name = '';
	}
}

var product = new Product();
product.name = "product name";

Backendless.enablePromises();
// Backendless.UserService.register( user )
// 	.then(userRegistered)
// 	.catch(gotError);
Backendless.Persistence.of( Product )
	.save( product )
	.then( result )
	.catch( gotError );


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
