import React, { Component } from 'react';
import { View } from 'react-native';
import Styles from './style.js';

export default class Separator extends Component {

  render() {
    const { customStyle, styles, height, backgroundColor } = this.props;
    return (
      <View style={[
        Styles.separator,
        customStyle,
        { height: height, backgroundColor: backgroundColor }
      ]}/>
    );
  }
}


Separator.propTypes = {
  customStyle: React.PropTypes.object,
};
