import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import styles from './style';


export default class NavBarTextButton extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => this.props.handlerFunc()}
        style={[
          styles.btnSmall,
          (this.props.propStyle ? this.props.propStyle : null),
        ]}
      >
        <Text style={styles.navBtnText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}


NavBarTextButton.propTypes = {
  handlerFunc: React.PropTypes.func,
  text: React.PropTypes.string,
};
