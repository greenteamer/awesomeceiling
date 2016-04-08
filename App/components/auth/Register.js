import React, {
	Component,
	View,
	Text,
	Image,
	TextInput,
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableHighlight
} from 'react-native';
import ButtonRounded from '../widgets/ButtonRounded.js';
import BTNBig from '../widgets/BTNBig.js';
import styles from '../styles/style.js';
import gradient from '../styles/gradient.js';
import LinearGradient from 'react-native-linear-gradient';
import config from '../../config.js';

var deviceWidth = Dimensions.get('window').width;

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	register(){
		// console.log("login func start");
		let url = config.domain + '/rest-auth/login/';
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: 'username',
				email: 'admin@admin.ru',
				password: 'balabas1986',
			})
		})
			.then((response) => response.text())
			.then((responseText) => console.log("auth responce: ", responseText));
	}

	pushToLogin(){
		console.log("pushToLogin");
	}

	render(){
		return(
			<ScrollView>
				<View style={{marginTop: 80, marginBottom: 20}}>
					<Image style={{alignSelf: 'center'}} source={require('../img/icon.png')}/>
					<Text style={styles.h1Center}>
						Регистрация
					</Text>
					<Text style={styles.textCenter}>
						Постройте свою идеальную компанию
					</Text>
				</View>
				<View> 
					<View style={styles.formGroup}> 
						<TextInput
							style={styles.textInput}
							placeholder={'имя пользователя'}
							placeholderTextColor={'#bcc5c9'} 
							onChangeText={(value) => this.setState({value})}
							value={this.state.value} />
						<TextInput
							style={styles.textInput}
							placeholder={'email'}
							placeholderTextColor={'#bcc5c9'} 
							onChangeText={(value) => this.setState({value})}
							value={this.state.value} />
						<TextInput
							style={styles.textInput}
							placeholder={'пароль'}
							secureTextEntry={true}
							placeholderTextColor={'#bcc5c9'} />
					</View>
					<BTNBig
						onPress={()=> this.register()}
						text="Войти" />
				</View>
				<View style={{ marginTop: 20 }}>
					<TouchableHighlight
						underlayColor="#B5B5B5"
						onPress={this.pushToLogin}>
						<Text style={styles.textCenter}>
							Уже есть аккаунт?
							<Text style={{color: '#06bebd'}}> Войти</Text>
						</Text>
					</TouchableHighlight>
				</View>
			</ScrollView>
		)
	}

}


