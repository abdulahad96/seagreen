import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Header, ButtonContainer} from '../../components';
import styles from './styles';
import {Metrics, Colors, Fonts, Images} from '../../theme';
const BatchDetails = ({navigation}) => {
  const renderHeaderRow = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: Metrics.screenWidth * 0.05,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>Area </Text>
          <Text>Showing All (5)</Text>
        </View>
        <Image
          source={Images.filter}
          style={{
            width: Metrics.ratio(20),
            height: Metrics.ratio(20),
          }}
        />
      </View>
    );
  };

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
        headerTextStyle={{color: Colors.white}}
        headerCustom={{backgroundColor: Colors.sea_blue_alt}}
        headerText="Marketplace"
        leftIcon={Images.leftArrow}
        rightIcon={Images.bell}
        rightIconStyle={{marginRight: Metrics.screenWidth * 0.2}}
        rightBtnPress={() => {
          navigation.pop();
        }}
      />
      <View style={{paddingHorizontal: Metrics.screenWidth * 0.025}}>
        {renderHeaderRow()}
        <View style={styles.cardContainer}>
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
              btnTxt="BUY"
              txtStyle={styles.BtnTxt}
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default BatchDetails;
