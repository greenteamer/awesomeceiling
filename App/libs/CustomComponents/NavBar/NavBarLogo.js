/* NavBarLogo */
import React from 'react';
import ResponsiveImage from 'react-native-responsive-image';


const LOGO = require('@appImages/test-image.png');
const NavBarLogo = (
  <ResponsiveImage
    initWidth="179"
    initHeight="20"
    source={LOGO}
    style={{ alignSelf: 'center', margin: 6 }}
  />
);


export default NavBarLogo;
