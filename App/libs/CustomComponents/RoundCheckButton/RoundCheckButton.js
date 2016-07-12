import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import ButtonStyle from './style.js';

export default class RoundCheckButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onPressButton() {
    this.props.onClick();
  }

  render() {
    const { isChecked, containerStyle, checkContainerStyle, textStyle, checkTextStyle, text, onClick } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
        <View style={[
          ButtonStyle.buttonBackground,
          containerStyle,
          (isChecked) ? ButtonStyle.checkStyle : null,
          (isChecked && checkContainerStyle) ? checkContainerStyle : null,
        ]}>
          <Text
            style={[
              ButtonStyle.text,
              textStyle,
              (isChecked) ? ButtonStyle.checkStyleText : null,
              (isChecked && checkTextStyle) ? checkTextStyle : null,
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


RoundCheckButton.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
  style: React.PropTypes.object,
};
