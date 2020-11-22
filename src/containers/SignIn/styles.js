import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../theme';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.sea_light_grey
  },

  logoContainer: {
    alignItems: "center",
    marginTop: Metrics.screenHeight * 0.11,
    marginBottom:Metrics.screenHeight * 0.080,
    borderRadius: Metrics.ratio(50)
  },
  mainHeading: {
    fontSize: Metrics.ratio(16),
    fontFamily: Fonts.type.RobotoBold,
    color: Colors.Black,
  },
  logoImage:{
    height:Metrics.ratio(80),
    width:Metrics.ratio(220),
    backgroundColor:'white',
    borderRadius:Metrics.ratio(5)
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center",
    width:'95%',
    paddingHorizontal:Metrics.ratio(10),
    paddingVertical:Metrics.ratio(60),
    marginHorizontal: Metrics.screenWidth * 0.05,
    },
  forgetPasswordContainer: {
    width: '95%',
    alignItems: 'flex-end'
  },
  forgetPasswordTxt:{
    fontSize: Metrics.ratio(11),
    color: Colors.dark_navy_blue,
    fontSize:Metrics.ratio(12)
  },
  submitButtonView: {
    width: '95%',
    height:Metrics.ratio(50),
    marginTop: Metrics.ratio(40),
    marginBottom: Metrics.ratio(10),
    borderRadius:Metrics.ratio(25),
    backgroundColor: Colors.footer_green,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 4
  },
 submitBtnTxt: {
    color: Colors.white,
    fontSize: Metrics.ratio(16),
      fontFamily: Fonts.type.demibold,
  }
});
