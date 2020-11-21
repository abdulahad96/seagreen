import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.sea_light_grey,
  },
  mainHeading: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.RobotoBold,
    color: Colors.Black,
  },
});
