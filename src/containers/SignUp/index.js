import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground,ScrollView } from 'react-native';
import { Images, Metrics, Colors } from '../../theme'
import styles from './styles';
import InputContainer from '../../components/Input'
import ButtonContainer from '../../components/Button'

const SignUp = ({ navigation }) => {
  const [passwordHide, setPasswordHide] = useState(true)
  const [logoImage, setLogoImage] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorTxt, setErrorTxt] = useState("")
  const [loading, setLoading] = useState(false)
  const [emailActive, setEmailActive] = useState(false);
  const [passActive, setPassActive] = useState(false);

  return (

    <View style={styles.container}>
        <ScrollView style={{marginVertical:Metrics.ratio(10)}}>
    
      <View >
        <View style={styles.logoContainer}>
          <View style={{ width: Metrics.screenWidth * 0.55, height: Metrics.screenHeight * 0.15, backgroundColor: Colors.read_only_blue }}></View>
          {/* <Image style={styles.logoImage} source={logoImage ? logoImage : Images.logo} /> */}
        </View>
      </View>
      <View style={styles.formContainer}>
        <InputContainer
          placeHolder={'Email'}
          isActive={emailActive}
          onChange={(e) => {
            setEmail(e)
            setEmailActive(!emailActive)
            setPassActive(false)
          }}

          titleTxt={'Email'}
        />
        <InputContainer
          placeHolder={'User Name'}
          isActive={emailActive}
          onChange={(e) => {
            setEmail(e)
            setEmailActive(!emailActive)
            setPassActive(false)
          }}

          titleTxt={'User Name'}
        />
        <InputContainer
          placeHolder='Enter password'
          isActive={passActive}
          onChange={(e) => {
            setPassword(e)
            setEmailActive(false)
            setPassActive(!passActive)

          }}
          secureTextEntry={passwordHide}
          showSecure={passwordHide ? 'eye' : 'eye-closed'}
          onPressEye={() => {
            setPasswordHide(!passwordHide)
          }}
        />
        <InputContainer
          placeHolder='Enter Confirm Password'
          isActive={passActive}
          onChange={(e) => {
            setPassword(e)
            setEmailActive(false)
            setPassActive(!passActive)

          }}
          secureTextEntry={passwordHide}
          showSecure={passwordHide ? 'eye' : 'eye-closed'}
          onPressEye={() => {
            setPasswordHide(!passwordHide)
          }}
        />
        <ButtonContainer
          btnInnerStyle={styles.submitButtonView}
          btnTxt="Register"
          txtStyle={styles.submitBtnTxt}
          onPress={() => {
            navigation.navigate('SignIn')
          }}
        />

      </View>
</ScrollView>
    </View >
  );
}
export default SignUp;