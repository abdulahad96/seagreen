

import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../theme';

export default StyleSheet.create({

    inputFieldView: {
        width: '95%',
        marginVertical: Metrics.ratio(10),
        borderWidth: Metrics.ratio(1),
        borderColor:Colors.dark_grey,
        borderRadius:Metrics.ratio(5),
     
    },
    inputHeaderContainer:{
        flexDirection:"row",
    },
    inputField: {
        width: Metrics.screenWidth*0.75,
        fontSize: Metrics.ratio(16),
        fontFamily: Fonts.type.regular,
        color: Colors.dark_navy_blue

    },
    tileImageContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: Metrics.screenWidth * 0.9,
      },
      titleImageStyle : {
        width: Metrics.ratio(20),
        marginRight:Metrics.ratio(5),
        height: Metrics.ratio(20)
    }
});
