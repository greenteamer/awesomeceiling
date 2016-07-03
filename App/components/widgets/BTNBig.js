/* @flow */
'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight
} from 'react-native';

import style from '../styles/style.js';

export default class Button extends Component {
    render() {
        return(
            <TouchableHighlight
                style={style.btnBig}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                    <Text style={style.btnText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}




