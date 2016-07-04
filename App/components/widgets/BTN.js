/* @flow */
'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableHighlight } from 'react-native';

import style from '@appStyles/style.js';

export default class BTN extends Component {
    render() {
        return(
            <TouchableHighlight
                style={this.props.style}
                underlayColor="#B5B5B5"
                onPress={this.props.onPress}>
                    <Text style={style.btnText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}




