import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import {Header, ButtonContainer} from '../../components';
import {Metrics, Colors, Fonts, Images} from '../../theme';

const OfferScreen = ({navigation}) => {
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
        headerCustom={{backgroundColor: Colors.sea_blue_alt}}
        headerText="Offer Screen"
        leftIcon={Images.leftArrow}
        rightIcon={Images.bell}
        rightBtnPress={() => {
          navigation.pop();
        }}
      />
      <View style={{paddingHorizontal: Metrics.screenWidth * 0.025}}>
        <View style={styles.cardContainer}>
          <View
            style={{
              backgroundColor: Colors.sea_blue_alt,
              borderTopLeftRadius: Metrics.ratio(10),
              borderTopRightRadius: Metrics.ratio(10),
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.white}}>OFFER ACCEPTED</Text>
          </View>
          <View
            style={{
              paddingHorizontal: Metrics.screenWidth * 0.025,
              paddingVertical: Metrics.screenWidth * 0.025,
            }}>
            {renderRow({
              firstTitle: 'STATUS',
              firstValue: 'OWNER',
              secondTitle: 'Harvest Ready',
              secondValue: 'Thomasom',
            })}
            {renderRow({
              firstTitle: 'BATCH ID',
              secondTitle: 'Th8829jqbaksdqw',
              image: true,
            })}
            <View>
              <ButtonContainer
                btnInnerStyle={styles.ButtonView}
                btnTxt="MAKE PAYMENT"
                txtStyle={styles.BtnTxt}
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OfferScreen;
