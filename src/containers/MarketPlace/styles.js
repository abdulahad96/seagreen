import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sea_light_grey,
  },
  subContainer: {
    paddingHorizontal: Metrics.screenWidth * 0.05,
    paddingVertical: Metrics.screenWidth * 0.05,
  },
  cardContainer:{
    backgroundColor: Colors.white,
    borderRadius: Metrics.ratio(10),
    paddingVertical: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(10),
  },
  smallText: {
    fontSize: Fonts.size.ten
  },
  LargeText: {
    fontSize: Fonts.size.sixteen
  }
});
