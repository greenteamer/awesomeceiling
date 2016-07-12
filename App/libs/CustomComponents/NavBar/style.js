import { StyleSheet } from 'react-native';


const NavbarStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f7',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  btnSmall: {
    padding: 5,
    alignSelf: 'center',
  },
  titleLogo: {
  },
  navBar: {
    marginTop: -3,
    marginBottom: 0,
  },
  navBtnText: {
    fontSize: 17,
    fontFamily: 'Geometria-Bold',
    color: '#ffffff',
  },
  bottomButton: {
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
});


export default NavbarStyles;
