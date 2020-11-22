import React, { Component } from 'react';
import { View, Text, Image, Modal, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Octicons from 'react-native-vector-icons/Octicons';
import styles from './styles';
import { Metrics, Images } from '../../theme';
import ButtonContainer from '../Button';

const ModalContainer = ({
    showModal,
    title,
    btnTxt,
    closeModal,
    btnColor
}) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
         
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ borderRadius: Metrics.ratio(50), justifyContent: 'center', alignItems: "center" }}>
                        <Image style={{ marginTop: Metrics.ratio(0), width: Metrics.ratio(80), height: Metrics.ratio(80) }} source={Images.RightCheck} />
                    </View>
                    <View><Text style={styles.modalText}>{title}</Text></View>
                    <ButtonContainer
                        btnInnerStyle={styles.acceptButtonView}
                        btnTxt="Accept"
                        txtStyle={styles.acceptBtnTxt}
                        onPress={() => {  closeModal() }}
                    />

                </View>
            </View>
        </Modal>


    );
}

ModalContainer.propTypes = {
};

ModalContainer.defaultProps = {

};
export default ModalContainer;
