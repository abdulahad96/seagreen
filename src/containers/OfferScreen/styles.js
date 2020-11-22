import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sea_light_grey,
  },
  cardContainer: {
    marginVertical: Metrics.screenWidth * 0.025,
    backgroundColor: Colors.white,
    borderRadius: Metrics.ratio(10),
  },
  smallText: {
    fontSize: Fonts.size.ten,
  },
  LargeText: {
    fontSize: Fonts.size.sixteen,
  },
  ButtonView: {
    width: '100%',
    paddingVertical: Metrics.ratio(10),
    marginVertical: Metrics.ratio(10),
    borderRadius: Metrics.ratio(25),
    backgroundColor: Colors.sea_blue_alt,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  BtnTxt: {
    color: Colors.white,
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.demibold,
  },
});
