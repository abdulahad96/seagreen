import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHeading: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.RobotoBold,
    color: Colors.Black,
  },
  declineButtonView: {
    width: '45%',
    marginTop: Metrics.ratio(10),
    marginBottom: Metrics.ratio(10),
    borderRadius: Metrics.ratio(25),
    marginHorizontal: Metrics.screenWidth * 0.02,
    borderColor: Colors.footer_green,
    borderWidth: Metrics.ratio(1),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: Metrics.ratio(5)
   
  },
  declineBtnTxt: {
    color: Colors.footer_green,
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.demibold,
  },
  acceptButtonView: {
    width: '45%',
    paddingVertical: Metrics.ratio(5),
    marginTop: Metrics.ratio(10),
    marginHorizontal: Metrics.screenWidth * 0.02,
    marginBottom: Metrics.ratio(10),
    borderRadius: Metrics.ratio(25),
    backgroundColor: Colors.footer_green,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4,
  },
  acceptBtnTxt: {
    color: Colors.white,
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.demibold,
  },
  subContainer: {
    paddingHorizontal: Metrics.screenWidth * 0.05,
    paddingVertical: Metrics.screenWidth * 0.05,
  },
  cardContainer: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.ratio(10),
    paddingVertical: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(10),
  },
  smallText: {
    fontSize: Fonts.size.ten,
  },
  LargeText: {
    fontSize: Fonts.size.sixteen,
  },
});
