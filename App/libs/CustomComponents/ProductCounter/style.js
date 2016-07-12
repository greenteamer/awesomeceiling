import { StyleSheet, Dimensions } from 'react-native';

const ProductCounterStyle = StyleSheet.create({
  ProductCounterBlock: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    alignSelf: 'center',
    justifyContent: 'center',

    height: 40,
    flexWrap: 'nowrap',
  },
  textBlock: {
    backgroundColor: '#FCFAFD',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Geometria-Medium',
    // textAlign: 'center',
    margin: 5,
    color: 'black',
    backgroundColor: 'transparent',
  },
});

export default ProductCounterStyle;
