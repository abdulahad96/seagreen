import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';
import { Metrics,Colors,Images } from '../../theme';


const InputContainer = ({
    inputContainerStyle,
    inputFieldStyle,
    autoCapitalize,
    isActive,
    placeholderTextColor,
    placeHolder,
    onChange,
    secureTextEntry,
    showSecure,
    onPressEye

}) => {


    return (
        <View style={[styles.inputFieldView,inputContainerStyle]}>
            <View style={[styles.tileImageContainer]}>
            
                <TextInput
                    style={[styles.inputField,isActive?{borderColor:Colors.footer_green}:{},inputFieldStyle]}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize={autoCapitalize}
                    placeholder={placeHolder}
                    onChangeText={text => onChange(text)}
                    secureTextEntry={secureTextEntry}
                />
                <TouchableOpacity onPress={onPressEye}>
                    {isActive &&<Image source={Images.check}/>}
               {/* <Octicons name={showSecure} size={20} ></Octicons> */}
               </TouchableOpacity>
 
            </View>
        </View>


    );
}

InputContainer.propTypes = {
    inputContainerStyle: PropTypes.node,
    HeaderTextStyle: PropTypes.node,
    titleImageContainer: PropTypes.node,
    titleImageStyle:PropTypes.node,
    placeholderTextColor:PropTypes.string,
    placeHolder:PropTypes.string,
    onChange:PropTypes.func.isRequired,
    inputImage:PropTypes.string.isRequired,
    titleTxt:PropTypes.string.isRequired,
    autoCapitalize:PropTypes.string,
    secureTextEntry:PropTypes.bool
  };

InputContainer.defaultProps = {
    inputContainerStyle: { },
    HeaderTextStyle: { },
    titleImageContainer: { },
    titleImageStyle: { },
    inputFieldStyle:{},
    placeholderTextColor:Colors.dark_grey,
    autoCapitalize:'none',
    secureTextEntry:false
   
};
export default InputContainer;
