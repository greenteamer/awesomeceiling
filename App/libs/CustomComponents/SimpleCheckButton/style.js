import { StyleSheet, Dimensions } from 'react-native';

const ButtonStyle = StyleSheet.create({
  buttonBackground: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 40,
    width: 40,
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 14,
    fontFamily: 'Geometria-Medium',
    color: '#2A2A2A',
    backgroundColor: 'transparent',
    marginLeft: 10,
  },
});

export default ButtonStyle;
