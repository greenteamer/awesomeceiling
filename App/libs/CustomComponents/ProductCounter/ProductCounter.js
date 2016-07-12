import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { GreenButton } from '@appLibs/CustomComponents/GreenButton';
import ProductCounterStyle from './style.js';

export default class ProductCounter extends Component {

  render() {
    const { customStyle, onPlusClick, onMinusClick, quantity } = this.props;
    return (
      <View style={[ProductCounterStyle.ProductCounterBlock, customStyle]}>
        <GreenButton text="-" customStyle={{ height: 40, width: 20 }} onClick={onMinusClick}/>
        <View style={ProductCounterStyle.textBlock}>
          <Text style={ProductCounterStyle.text}>{quantity} Шт</Text>
        </View>
        <GreenButton text="+" customStyle={{ height: 40, width: 20 }} onClick={onPlusClick}/>
      </View>
    );
  }

}


ProductCounter.propTypes = {
  onPlusClick: React.PropTypes.func,
  onMinusClick: React.PropTypes.func,
  quantity: React.PropTypes.string,
  customStyle: React.PropTypes.object,
};
