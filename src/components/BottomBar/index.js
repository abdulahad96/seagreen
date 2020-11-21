import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import { Metrics, Colors } from '../../theme';

const BottomBar = ({

}) => {
 

  return (
    <View
    style={[
      styles.container,
      headerShadow && styles.containerShadow,
      headerStyle
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

BottomBar.propTypes = {
   
};

BottomBar.defaultProps = {

};
export default BottomBar;
