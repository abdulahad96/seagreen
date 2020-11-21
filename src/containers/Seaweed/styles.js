import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sea_light_grey,
  },
  mainHeading: {
    fontFamily: Fonts.type.HelveticaNeueBlack,
    fontSize: Fonts.size.xxLarge,
    color: Colors.dark_navy_blue
  },
  lastLoginText: {
    fontFamily: Fonts.type.HelveticaNeueBlack,
    fontSize: Fonts.size.ten,
    color: Colors.lignt_green,
    marginTop: Metrics.ratio(15)
  },
  buttonContainerRow: {
    marginTop: Metrics.screenHeight * 0.07,
    flexDirection: "row",
  }
});
