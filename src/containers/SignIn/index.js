import React, { Component, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground,ScrollView } from 'react-native';
import { Images, Metrics, Colors } from '../../theme'
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux'
import InputContainer from '../../components/Input'
import ButtonContainer from '../../components/Button'
import {request as loginRequest} from '../../redux/actions/Login'

const SignIn = ({ navigation }) => {
  const [passwordHide, setPasswordHide] = useState(true)
  const [logoImage, setLogoImage] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorTxt, setErrorTxt] = useState("")
  const [loading, setLoading] = useState(false)
  const [emailActive, setEmailActive] = useState(false);
  const [passActive, setPassActive] = useState(false);

  const dispatch = useDispatch()
  const login = async ()=>{
    const payload = {
      email :email,
      password:password
    }
    console.log(payload)
  }
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
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (email.match(emailRegex)){
              setEmailActive(true)
            }
            else{
              setEmailActive(false)
            }
           
            // setPassActive(false)
          }}

          titleTxt={'Email'}
        />
        <InputContainer
          placeHolder='Enter password'
          isActive={passActive}
          onChange={(e) => {
        
            setPassword(e)
            // setEmailActive(false)
            // setPassActive(!passActive)

          }}
          secureTextEntry={passwordHide}
          showSecure={passwordHide ? 'eye' : 'eye-closed'}
          onPressEye={() => {
            setPasswordHide(!passwordHide)
          }}
        />
        <View style={styles.forgetPasswordContainer}>
          <TouchableOpacity
            onPress={() => { }}>
            <Text
              style={styles.forgetPasswordTxt}>
              Forgot Password?
                  </Text>
          </TouchableOpacity>

        </View>
        <ButtonContainer
          btnInnerStyle={styles.submitButtonView}
          btnTxt="Login"
          txtStyle={styles.submitBtnTxt}
          onPress={() => {
            login()
            // navigation.navigate('Home')
           }}
        />

      </View>
      <View style={{ flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:Colors.dark_navy_blue,fontSize:Metrics.ratio(16),fontWeight:"bold"}}>I’m a new user.</Text>
        <TouchableOpacity    onPress={() => {
            navigation.navigate('SignUp') }}>
          <Text style={{color:Colors.footer_green,fontSize:Metrics.ratio(16),fontWeight:"bold"}}> Sign Up</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}
export default SignIn;