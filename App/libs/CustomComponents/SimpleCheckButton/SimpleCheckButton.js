import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import ButtonStyle from './style.js';
import Icon from 'react-native-vector-icons/Ionicons';


export default class SimpleCheckButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isChecked != undefined) {
      this.state = {
        isChecked: nextProps.isChecked,
      };
    }
  }

  _onPressButton() {
    this.props.onClick(!this.state.isChecked);
  }

  render() {
    const { isChecked, customStyle, customTextStyle, customCheckedStyle, customCheckedStyleText, text, onClick, offColor, onColor } = this.props;
    let icon = (
      <Icon
        name="ios-radio-button-off-outline"
        size={25}
        color={(offColor) ? offColor : '#AE8048'}
      />
    );
    if (isChecked) {
      icon = (
        <Icon
          name="ios-checkmark-circle"
          size={25}
          color={(onColor) ? onColor : '#7CBD32'}
        />
      )
    }
    let textComponent = null;
    if (text) {
      textComponent = (
        <Text
          style={[
            ButtonStyle.text,
            customTextStyle,
            (isChecked) ? ButtonStyle.checkStyleText : null,
            (isChecked && customCheckedStyleText) ? customCheckedStyleText : null,
          ]}
        >
          {text}
        </Text>
      )
    }

    return (
      <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
        <View style={[
          ButtonStyle.buttonBackground,
          customStyle,
          (isChecked) ? ButtonStyle.checkStyle : null,
          (isChecked && customCheckedStyle) ? customCheckedStyle : null,
        ]}>
          {icon}
          {textComponent}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


SimpleCheckButton.propTypes = {
  onClick: React.PropTypes.func,
  isChecked: React.PropTypes.boolean,
  text: React.PropTypes.string,
  customStyle: React.PropTypes.object,
};
