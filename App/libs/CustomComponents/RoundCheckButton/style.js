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
    borderWidth: 1,
    borderColor: '#AE8048',
    justifyContent: 'center',
    height: 40,
    width: 40,
    flexWrap: 'nowrap',
  },
  text: {
    fontSize: 11,
    fontFamily: 'Geometria-Medium',
    color: '#AE8048',
    backgroundColor: 'transparent',
  },
  checkStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#AE8048',
  },
  checkStyleText: {
    color: 'white',
  },
});

export default ButtonStyle;
