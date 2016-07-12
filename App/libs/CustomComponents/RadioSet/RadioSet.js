import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { RoundCheckButton } from '@appLibs/CustomComponents/RoundCheckButton';
import Styles from './style.js';


export default class RadioSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexChecked: ( props.indexChecked ) ? props.indexChecked : 0,
    };
  }

  _onClickButton(index, e) {
    this.setState({ indexChecked: index });
    this.props.onChangeIndex(index);
  }

  render() {
    const { style, values, containerStyle, checkContainerStyle, textStyle, checkTextStyle } = this.props;
    const { indexChecked } = this.state;

    return (
      <View style={ Styles.container }>
        {values.map( (item, index) => {
          return (
            <View key={index} style={ Styles.itemContainer }>
              <RoundCheckButton
                text={item}
                isChecked={ (indexChecked === index) ? true : false }
                onClick={ this._onClickButton.bind(this, index) }
                containerStyle={containerStyle}
                checkContainerStyle={checkContainerStyle}
                textStyle={textStyle}
                checkTextStyle={checkTextStyle}
              />
            </View>
          )
        })}
      </View>
    );
  }
}


RadioSet.propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
  customStyle: React.PropTypes.object,
};
