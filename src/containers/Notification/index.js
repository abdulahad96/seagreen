import React, {Component, useState} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../components/Header';
import {Metrics, Colors, Fonts, Images} from '../../theme';
import styles from './styles';
import ButtonContainer from '../../components/Button';
import ModalView from '../../components/ModalView';

const Notification = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderRow = data => {
    return (
      <View>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
          ]}>
          <View>
            <Text style={[styles.smallText]}>{data.firstTitle}</Text>
            <Text style={[styles.LargeText]}>{data.secondTitle}</Text>
          </View>

          {data?.image ? (
            <Image
              source={Images.map}
              style={{width: Metrics.ratio(30), height: Metrics.ratio(30)}}
            />
          ) : (
            <View>
              <Text style={[styles.smallText]}>{data.firstValue}</Text>
              <Text style={[styles.LargeText]}>{data.secondValue}</Text>
            </View>
          )}
        </View>

        <View
          style={{
            borderBottomWidth: Metrics.ratio(1),
            borderBottomColor: Colors.dark_grey,
            marginVertical: Metrics.ratio(10),
          }}></View>
      </View>
    );
  };
  return (
    <View style={{...styles.container}}>
      <Header
        headerTextStyle={{color: 'white'}}
        headerCustom={{backgroundColor: Colors.footer_green}}
        headerText="Offer Notification"
        rightIcon={Images.cross}
        rightBtnPress={() => {
          navigation.pop();
        }}
      />
      <View style={styles.subContainer}>
        <View style={styles.cardContainer}>
          {renderRow({
            firstTitle: 'STATUS',
            firstValue: 'OFFER RECEIVED',
            secondTitle: 'Baled',
            secondValue: 'IDR 400',
          })}
          {renderRow({
            firstTitle: 'BATCH ID',
            secondTitle: 'Th8829jqbaksdqw',
            image: true,
          })}
          {renderRow({
            firstTitle: 'BAYERS NAME',
            firstValue: "BUYERS ID",
            secondTitle: 'ANDYLAW',
            secondValue: "002345"
          })}
          {/* {renderRow({
            firstTitle: 'Baled',
            secondTitle: 'IDR 400',
            isTiny: false,
            borderVisible: true,
          })}
          {renderRow({
            firstTitle: 'BATCH ID',
            isTiny: true,
            borderVisible: false,
          })}
          {renderRow({
            firstTitle: 'TH8829jqaksdw',
            isTiny: false,
            borderVisible: true,
          })}
            {renderRow({
            firstTitle: 'BUYER NAME',
            secondTitle: 'BUYERS ID',
            isTiny: true,
            borderVisible: false,
          })}
          {renderRow({
            firstTitle: 'Andylaw',
            secondTitle: '002345',
            isTiny: false,
            borderVisible: true,
            isSelected: true
          })} */}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ButtonContainer
              btnInnerStyle={styles.declineButtonView}
              btnTxt="Decline"
              txtStyle={styles.declineBtnTxt}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <ButtonContainer
              btnInnerStyle={styles.acceptButtonView}
              btnTxt="Accept"
              txtStyle={styles.acceptBtnTxt}
              onPress={() => {
                setModalVisible(true);
              }}
            />
          </View>
        </View>
      </View>

      <ModalView
        showModal={modalVisible}
        title={'Acceptance Sent'}
        btnTxt={'OK'}
        closeModal={() => {
          setModalVisible(!modalVisible);
        }}
      />
    </View>
  );
};
export default Notification;
