import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Triangle from 'react-native-triangle';
import ButtonStyle from './style.js';

export default class TotalPriceTop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { customStyle, customTextStyle, price } = this.props;
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <View style={[ButtonStyle.buttonBackground, customStyle]}>
        <Text style={[ButtonStyle.text, customTextStyle]}>{price} Р</Text>
      </View>
      <Triangle
        width={12}
        height={16}
        color={'#FF4A1A'}
        direction={'right'}
      />
      </View>
    );
  }
}


TotalPriceTop.propTypes = {
  price: React.PropTypes.string,
  customStyle: React.PropTypes.object,
};
