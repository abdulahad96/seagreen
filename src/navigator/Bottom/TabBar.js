//* /src/components/TabBar.js */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors, Metrics, Images} from '../../theme';

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 52,
    elevation: 2,
    backgroundColor: 'red',
  },
  tabButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

function renderItems(isFocused, label) {
  if (label == 'MarketPlace') {
    return (
      <View
        style={{
          width: Metrics.screenHeight * 0.12,
          height: Metrics.screenHeight * 0.12,
          borderRadius: 100,
          backgroundColor: Colors.whitesmoke,
          top: Metrics.ratio(-30),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '80%',
            height: '80%',
            borderRadius: 100,
            backgroundColor: Colors.sea_light_grey,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            elevation: 20,
            shadowColor: 'rgba(171, 180, 189, 0.35)',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 10,
            shadowRadius: 20,
          }}>
          <Image
            source={Images.qrCode}
            style={{
              width: '50%',
              height: '50%',
            }}
          />
        </View>
      </View>
    );
  }
  else{
    if(!isFocused){
      return <Image source={Images[label]} />
    }else{
      return <Image source={Images[`${label}White`]} />
    }
  }

  
}

function CustomTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Metrics.ratio(5),
        height: Metrics.screenHeight * 0.1,
        backgroundColor: Colors.lightseagreen,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: "center"}}>
            {renderItems(isFocused, label)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTabBar;
