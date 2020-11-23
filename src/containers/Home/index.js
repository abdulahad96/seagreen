import React, { Component, useState,useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { IconContainer, Header } from '../../components';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { Fonts, Colors, Images, Metrics } from '../../theme';

const Home = ({ navigation }) => {
  // const [user, setUser] = useState(null);
 const user  = useSelector(({ login }) => login.data.data)
    // setUser()
 
    // console.log(login.data.data)
    // if (!login.failure && !login.isFetching && login.data.data && login.data.status) {
    // }
  
  useEffect(()=>{
    console.log(user)
  },[user])
  return (
    <View style={{ ...styles.container }}>
      <Header
        headerShadow={false}
        rightIcon={Images.bell}
        rightIconStyle={{ marginRight: Metrics.screenWidth * 0.2 }}
        rightBtnPress={() => {
          navigation.navigate('Notification');
        }}
      />
      <ScrollView>
        <View style={{ paddingHorizontal: Metrics.screenWidth * 0.1 }}>
          <Text style={styles.mainHeading}>Hi {user?.firstName},</Text>
          <Text style={styles.mainHeading}>Welcome back</Text>
          <Text style={styles.lastLoginText}>
            Last Login Jun 12, 2020 4:10pm
          </Text>
          <View style={styles.buttonContainerRow}>
            <IconContainer title={'My Seaweed'} />
            <IconContainer
              title={'Market Place'}
              customStyle={{ marginLeft: Metrics.screenWidth * 0.05 }}
            />
          </View>
          <View
            style={[
              styles.buttonContainerRow,
              { marginTop: Metrics.screenWidth * 0.05 },
            ]}>
            <IconContainer title={'MICRA'} />
            <IconContainer
              title={'MARI'}
              customStyle={{ marginLeft: Metrics.screenWidth * 0.05 }}
            />
          </View>
          <View style={{ marginVertical: Metrics.ratio(50) }}>
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
export default Home;
