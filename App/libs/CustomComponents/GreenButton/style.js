import { StyleSheet, Dimensions } from 'react-native';

const ButtonStyle = StyleSheet.create({
  buttonBackground: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    backgroundColor: '#8DC63F',

    alignSelf: 'center',
    justifyContent: 'center',

    height: 50,
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Geometria-Medium',
    // textAlign: 'center',
    // margin: 13,
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export default ButtonStyle;
