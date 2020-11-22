import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import { Metrics, Colors } from '../../theme';

const Header = ({
  headerText,
  headerTextStyle,
  headerShadow,
  leftIcon,
  leftIconStyle,
  leftBtnPress,
  rightIcon,
  rightIconStyle,
  rightBtnPress,
  rightIconImageStyle,
  leftIconImageStyle,
  notification,
  headerCustom

}) => {
 

  return (
    <View
    style={[
      styles.container,
      headerShadow && styles.containerShadow,
      headerCustom,
     
    ]}>
   
    <TouchableOpacity
      onPress={leftBtnPress}
      style={[styles.TouchableMenu
      , leftIconStyle
      ]}
      testID={'header-left-btn'}
      >
        <Image style={leftIconImageStyle} source={leftIcon}/>
       </TouchableOpacity>

    <Text style={[styles.headerText, headerTextStyle]}>{headerText}</Text>

    <TouchableOpacity
      onPress={rightBtnPress}
      style={[styles.TouchableMenu,
       rightIconStyle
       ]}
       testID={'header-right-btn'}
       >
         <Image 
         style={[styles.rightIconImage,rightIconImageStyle]} 
         source={rightIcon}/>
         {notification > 0 && <View style={{position:"absolute",top:Metrics.ratio(5),right:Metrics.ratio(10),backgroundColor:"#6f6a41",paddingVertical:Metrics.ratio(2),paddingHorizontal:Metrics.ratio(5),borderRadius:Metrics.ratio(50)}}>
           <Text style={{fontSize:Metrics.ratio(8),color:'white'}}>{notification}</Text>
           </View>}
      
    </TouchableOpacity>
  </View>
  );
}

Header.propTypes = {
    headerText: PropTypes.string,
    headerTextStyle: PropTypes.object,
    headerShadow: PropTypes.bool,
    leftIcon: PropTypes.string,
    leftIconStyle: PropTypes.object,
    leftBtnPress: PropTypes.func,
    rightIcon: PropTypes.string,
    rightIconStyle: PropTypes.object,
    rightBtnPress: PropTypes.func,
    rightIconImageStyle:PropTypes.object,
    leftIconImageStyle:PropTypes.object,
    notification:PropTypes.number

};

Header.defaultProps = {
    headerText: '',
    headerTextStyle: undefined,
    headerShadow: true,
    leftIconStyle: undefined,
    leftIconSize: undefined,
    leftBtnPress: undefined,
    rightIconStyle: undefined,
    rightIconSize: undefined,
    rightBtnPress: undefined,
    rightIconImageStyle:undefined,
    leftIconImageStyle:undefined,
    notification:undefined
};
export default Header;
