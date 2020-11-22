

import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../theme';

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: Colors.white
    },

    modalView: {
        width: Metrics.screenWidth * 0.92,
        flexDirection: 'column',
        height: Metrics.screenHeight * 0.40,
        margin: Metrics.ratio(20),
        backgroundColor: "white",
        borderRadius: Metrics.ratio(10),
        paddingHorizontal: Metrics.ratio(35),
        paddingTop: Metrics.ratio(35),
        alignItems: "center",
        elevation:10
       
    },
    openButton: {
        width: '80%',
        backgroundColor: "#06c16a",
        padding: 10,
        elevation: 2,
        marginTop: Metrics.ratio(15)
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginVertical: Metrics.ratio(20),
        fontSize: Metrics.ratio(20),
        fontWeight:"bold",
        textAlign: "center"
    },
    acceptButtonView: {
        width: '65%',
        height:Metrics.ratio(50),
        marginHorizontal:Metrics.screenWidth*0.02,
        marginBottom: Metrics.ratio(10),
        borderRadius:Metrics.ratio(25),
        backgroundColor: Colors.footer_green,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        elevation: 4
      },
     acceptBtnTxt: {
        color: Colors.white,
        fontSize: Metrics.ratio(16),
          fontFamily: Fonts.type.demibold,
      }
});
