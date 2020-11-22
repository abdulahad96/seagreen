import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {IconContainer, Header} from '../../components';
import styles from './styles';
import {Fonts, Colors, Metrics} from '../../theme';

const Seaweed = ({navigation}) => {
  const handleOnPress = (screen_name) => {
    navigation.navigate(screen_name)
  }
  return (
    <View style={{...styles.container}}>
      <Header />
      <ScrollView>
        <View style={{paddingHorizontal: Metrics.screenWidth * 0.1}}>
          <Text style={styles.mainHeading}>Hi James,</Text>
          <Text style={styles.mainHeading}>Welcome back</Text>
          <Text style={styles.lastLoginText}>
            Last Login Jun 12, 2020 4:10pm
          </Text>
          <View style={styles.buttonContainerRow}>
            <IconContainer
              title={'My Seaweed'}
              onPress={() => handleOnPress('')}
            />
            <IconContainer
              title={'Market Place'}
              customStyle={{marginLeft: Metrics.screenWidth * 0.05}}
              onPress={() => handleOnPress('')}
            />
          </View>
          <View
            style={[
              styles.buttonContainerRow,
              {marginTop: Metrics.screenWidth * 0.05},
            ]}>
            <IconContainer title={'MICRA'} onPress={() => handleOnPress('')} />
            <IconContainer
              title={'MARI'}
              customStyle={{marginLeft: Metrics.screenWidth * 0.05}}
              onPress={() => handleOnPress('')}
            />
          </View>
          <View style={{marginVertical: Metrics.ratio(50)}}>
            <Text
              style={[
                styles.lastLoginText,
                {
                  textAlign: 'center',
                  fontSize: Fonts.size.fourteen,
                },
              ]}>
              Logout ?
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default Seaweed;
