import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.Ebony_Clay,
    height: Metrics.screenHeight * 0.095,
    flexDirection: 'row'
  },
  containerShadow: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  TouchableMenu: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: Metrics.ratio(18),
    fontFamily: Fonts.type.RobotoBold,
    color: Colors.white,
  },
});
