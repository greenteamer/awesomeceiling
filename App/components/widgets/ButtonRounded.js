/* @flow */
'use strict';

import React, {
    Component, 
    Text, 
    View, 
    StyleSheet,
    Dimensions,
    TouchableHighlight } from 'react-native';

export default class Button extends Component {
    render() {
        return(
            <TouchableHighlight
                style={styles.button}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight> 
        );
    }    
}

var deviceWidth = Dimensions.get('window').width;
var styles = StyleSheet.create({
    button: {
        backgroundColor: '#05A5D1',
        padding: 10,
        borderColor: 'transparent',
        borderWidth:2,
        alignSelf: 'center',
        borderRadius: 10,
        width: deviceWidth-50,
        height: 45,
        marginTop: 18
    },
    buttonText: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18
    }
});

