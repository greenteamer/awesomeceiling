import React, { Component } from 'react';
import {View, Text, Dimensions} from 'react-native';
import Spinner from 'react-native-spinkit';

export default function Layout(props) {
  return <View style={{flex: 1}}>
    {!props.condition && <View style={styles.loading}>
      <View style={styles.spinnerContainer}>
        <Spinner
          style={{alignSelf: 'center'}}
          isVisible={true}
          size={40}
          type="9CubeGrid"
          color="#06BEBD" />
      </View>
    </View>}
    {props.children}
  </View>;
}

const { width, height } = Dimensions.get('window');
const styles = {
  loading: {
    position: 'absolute',
    backgroundColor: 'rgba(6, 190, 189, 0.14)',
    height,
    width,
    top: 0,
    left: 0,
    zIndex: 100,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
}
