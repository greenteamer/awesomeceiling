import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import styles from './styles';


const { width } = Dimensions.get('window');


export default class CarouselIndicator extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { indicatorText, pages, indicatorCurrent, indicatorStyle, indicatorCurrentStyle } = this.props;
    const mLeft = (width - (pages.length * (10 + 4))) / 2;
    const calcStyles = StyleSheet.create({
      container: {
        marginLeft: mLeft,
        marginRight: 100,
      },
    });
    const indicators = pages.map((page, index) => {
      if (index === indicatorCurrent) {
        return (
          <Text
            key={index}
            style={[styles.indicatorCurrent, indicatorCurrentStyle]}
          >{indicatorText}</Text>
        );
      }
      return (
        <Text
          key={index}
          style={[styles.indicator, indicatorStyle]}
        >{indicatorText}</Text>
      );
    });
    return (
      <View style={[styles.indicatorContainer, calcStyles.container]}>
        {indicators}
      </View>
    );
  }
}


CarouselIndicator.propTypes = {
  indicatorText: React.PropTypes.string,
  pages: React.PropTypes.array,
  indicatorCurrent: React.PropTypes.number,
};
