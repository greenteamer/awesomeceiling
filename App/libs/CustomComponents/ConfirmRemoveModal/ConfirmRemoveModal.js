import React, { Component } from 'react';
import {
	Modal,
	View,
	Text,
} from 'react-native';
import Styles from './style.js';
import Button from 'react-native-button';

export default class ConfirmRemoveModal extends Component {

	constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modalVisible != undefined) {
      this.state = {
        modalVisible: nextProps.modalVisible,
      };
    }
  }


	setModalVisible(visible) {
    this.props.onChangeModalVisible(visible);
  }

	render() {
    const { removeProductFromCart, product, modalVisible } = this.props;
    // const { modalVisible } = this.state;

    return (
      <Modal
        animationType={'none'}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => this.setModalVisible(false)}
      >
        <View style={[Styles.container, Styles.modalBackgroundStyle]}>
          <View style={[Styles.innerContainer, Styles.innerContainerTransparentStyle]}>
            <Text>Данный товар пропадет из корзины. Вы точно хотите этого?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Button
                onPress={this.setModalVisible.bind(this, false)}
                style={Styles.modalButton}
              >
                No
              </Button>
              <Button
                onPress={() => { this.setModalVisible(false); removeProductFromCart(product._id, product.cost); }}
                style={Styles.modalButton}
              >
                Yes
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
