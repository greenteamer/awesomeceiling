import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import ButtonStyle from './style.js';

export default class GreenButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { customStyle, customTextStyle, text, onClick } = this.props;
    return (
      <TouchableWithoutFeedback onPress={onClick}>
        <View style={[ButtonStyle.buttonBackground, customStyle]}>
          <Text style={[ButtonStyle.text, customTextStyle]}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


GreenButton.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
  customStyle: React.PropTypes.object,
};
