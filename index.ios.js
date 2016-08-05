import React, { Component } from 'react';
import {
	AppRegistry,
} from 'react-native';


import RootRouter from './App/RootRouter.js'
import { realm, Sequence } from '@appSchema';


import Backendless from 'backendless';

var APPLICATION_ID = 'C7C5BC2D-3480-108E-FF1B-1ADD4DEDF900',
    SECRET_KEY = '56B00A81-C343-0BAC-FF56-629206CE3500',
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
		console.log('Sequences: ', realm.objects('Sequence'));
		// realm.write( ()=> {
		// 	realm.delete(realm.objects('User'));
		// });

		console.log('Users: ', realm.objects('User'));
		console.log('Projects: ', realm.objects('Project'));
		return (
			<RootRouter />
		)
	}
}


AppRegistry.registerComponent('AwesomeCeiling', () => AwesomeCeiling);
