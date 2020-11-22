
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
  HeaderLeftIconStyle: {
    marginLeft: Metrics.ratio(0),
    borderRadius:Metrics.ratio(5)
    
  },
  HeaderRightIconStyle: {
    position: 'absolute',
    right: -40,
    top: 30,
    marginRight: Metrics.ratio(50)
  },
  rightIconImage: {
    height: Metrics.ratio(35),
    width: Metrics.ratio(35)
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
