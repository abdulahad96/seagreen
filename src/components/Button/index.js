import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics } from '../../theme';


const ButtonContainer = ({
    btnTxt,
    txtStyle,
    btnInnerStyle,
    onPress
}) => {


    return (
            <TouchableOpacity
            onPress={()=>{onPress()}}
            style={[btnInnerStyle]}>
                <Text style={txtStyle}>{btnTxt}</Text>
            </TouchableOpacity>
        

    );
}

ButtonContainer.propTypes = {

};

ButtonContainer.defaultProps = {

};
export default ButtonContainer;
