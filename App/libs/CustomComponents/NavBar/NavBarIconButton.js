import React, { Component } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';


export default class NavBarAvaButton extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style } = this.props;
    // let icon = '';
    if (this.props.iconType === 'MaterialIcons') {
      var icon = <MaterialIcons
        name={this.props.iconName}
        size={(this.props.size) ? this.props.size : 25}
        color={(this.props.color) ? this.props.color : "#ffffff"}
        style={style}
      />;
    } else if (this.props.iconType === 'FontAwesome') {
      var icon = <FontAwesome
        name={this.props.iconName}
        size={(this.props.size) ? this.props.size : 25}
        color={(this.props.color) ? this.props.color : "#ffffff"}
        style={style}
      />;
    } else if (this.props.iconType === 'Ionicons') {
      var icon = <Ionicons
        name={this.props.iconName}
        size={(this.props.size) ? this.props.size : 25}
        color={(this.props.color) ? this.props.color : "#ffffff"}
        style={style}
      />;
    }

    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => this.props.handlerFunc()}
        style={[styles.btnSmall, this.props.propStyle]}
      >
        <View>{icon}</View>
      </TouchableHighlight>
    );
  }
}


NavBarAvaButton.propTypes = {
  handlerFunc: React.PropTypes.func,
  icon: React.PropTypes.string,
};
