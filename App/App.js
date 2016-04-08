import React, {
	Component,
	View,
	Text,
	Image,
	TextInput,
	StyleSheet,
	Dimensions
} from 'react-native';
import ButtonRounded from './components/widgets/ButtonRounded.js';
import login from './components/styles/login.js';
import gradient from './components/styles/gradient.js';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	login(){
		console.log("login func start")
		fetch('http://127.0.0.1:8000/rest-auth/login/', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: 'admin@admin.ru',
				password: 'balabas1986',
			})
		})
			.then((response) => response.text())
			.then((responseText) => console.log("auth responce: ", responseText));
	}

	logout(){
		fetch('http://127.0.0.1:8000/rest-api/logout/')
			.then((response) => console.log('logout response: ', response))
	}

	getProjects(){
		console.log("get projects func start")
		fetch('http://127.0.0.1:8000/api/projects/')
			.then((responce) => console.log(responce))
	}

	render(){

		return(
			<LinearGradient 
				start={[0.0, 1.0]} end={[1.0, 0.1]}
				locations={[-0.5, 1.0, 1.0]}
				colors={['#01ebb8', '#113e64']} 
				style={gradient.linearGradient}
				 >
				<Image image='./img/shadow.png' style={login.shadow}/>
				<Text>Авторизация</Text>
				<View>  
					<View style={login.borderBottom}>
						<TextInput
							style={login.textInput}
							placeholder={'ВВЕДИТЕ EMAIL'}
							placeholderTextColor={'#fff'} 
							onChangeText={(value) => this.setState({value})}
							value={this.state.value} />
					</View>  
					<View  style={login.borderBottom}>  
						<TextInput
							style={login.textInput}
							placeholder={'ВВЕДИТЕ ПАРОЛЬ'}
							secureTextEntry={true}
							placeholderTextColor={'#fff'} />
					</View>
					<ButtonRounded
						onPress={()=> this.login()}
						text="Login" />
					<ButtonRounded
						onPress={()=> this.getProjects()}
						text="Получить проекты" />
					<ButtonRounded
						onPress={()=> this.logout()}
						text="Выйти" />
				</View>
			</LinearGradient>
		)
	}

}

var deviceHeight = Dimensions.get('window').height;
