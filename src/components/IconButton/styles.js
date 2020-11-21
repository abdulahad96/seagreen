import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 0.375,
    backgroundColor: 'white',
    borderRadius: Metrics.ratio(10),
    alignItems: 'center',
    paddingVertical: Metrics.ratio(30),
    elevation: 2
  },

  textStyle: {
    fontSize: Fonts.size.sixteen,
    color: Colors.dark_navy_blue,
    marginTop: Metrics.ratio(20)
  }
  
});
