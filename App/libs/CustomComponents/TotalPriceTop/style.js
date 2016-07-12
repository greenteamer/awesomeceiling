import { StyleSheet, Dimensions } from 'react-native';

const ButtonStyle = StyleSheet.create({
  buttonBackground: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#FF4A1A',
    justifyContent: 'center',
    height: 16,
    width: 60,
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 12,
    fontFamily: 'Geometria-Medium',
    color: 'white',
    backgroundColor: 'transparent',
  },
});

export default ButtonStyle;
