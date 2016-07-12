import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import styles from './style';


export default class NavBarAvaButton extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this.props.handlerFunc}
        style={[styles.btnSmall, this.props.propStyle]}
      >
        <ResponsiveImage
          initWidth="34"
          initHeight="34"
          source={this.props.icon}
          style={{ marginBottom: 3 }}
        />
      </TouchableHighlight>
    );
  }
}


NavBarAvaButton.propTypes = {
  handlerFunc: React.PropTypes.func,
  icon: React.PropTypes.string,
};
