/* @flow */
'use strict';
import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';

import style from '@appStyles/style.js';

export default class Button extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  }

  alertDisabled = () => {
    const { disabledText } = this.props;
    AlertIOS.alert(disabledText.title, disabledText.description);
  }

  render() {
    const { onPress, disabled = false } = this.props;
    return(
      <TouchableHighlight
        style={style.btnBig}
        underlayColor="#B5B5B5"
        onPress={!disabled ? onPress : this.alertDisabled}>
          <Text style={style.btnText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}




