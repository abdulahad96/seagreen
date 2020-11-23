import React, { Component, useState,useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Images, Metrics, Colors } from '../../theme'
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import InputContainer from '../../components/Input';
import ButtonContainer from '../../components/Button';
import { request as loginRequest } from '../../redux/actions/Login'
import { SpinnerLoader } from '../../components';
import RNImagePicker  from 'react-native-image-picker'


const SignIn = ({ navigation }) => {
  const [passwordHide, setPasswordHide] = useState(true)
  const [logoImage, setLogoImage] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorTxt, setErrorTxt] = useState("")
  const [loading, setLoading] = useState(false)
  const [emailActive, setEmailActive] = useState(false);
  const [passActive, setPassActive] = useState(false);
  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const signInData = useSelector(({login}) =>login)
  const dispatch = useDispatch()
  const login = async () => {
    const payload = {
      email: email,
      password: password

    }

    dispatch(loginRequest(payload))
    setLoading(true)

  }
  useEffect(()=>{

    if (!signInData.failure && !signInData.isFetching && signInData.data.status && signInData.data.data ) {
      setLoading(false)
      navigation.navigate('App')
    }
  },[signInData])
  
  
  return (

    <View style={styles.container}>
      <ScrollView style={{ marginVertical: Metrics.ratio(10) }}>
        <View >
          <TouchableOpacity style={styles.logoContainer} onPress={() => {
              RNImagePicker.showImagePicker(options, (response) => {

                if (response.didCancel) {
                } else if (response.error) {
                } else if (response.customButton) {
                } else {
                  const source = { uri: response.uri };
                  let ImageObj = {
                    uri: (Platform.OS === 'android') ? response.uri : response.uri.replace('file://', ''),
                    type: response.type,
                    name: response.fileName,
                  };
                  // You can also display the image using data:
                  // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                  setLogoImage(source);
                }
              });
            }}>
           {logoImage ?<Image style={styles.logoImage} source={logoImage ? logoImage : Images.logo} /> 
           : <View style={{ width: Metrics.screenWidth * 0.55, height: Metrics.screenHeight * 0.15, backgroundColor: Colors.read_only_blue }}></View>}
          </TouchableOpacity>
        </View>
        <View style={styles.formContainer}>
          <InputContainer
            placeHolder={'Email'}
            isActive={emailActive}
            onChange={(e) => {
              setEmail(e)
              const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (email.match(emailRegex)) {
                setEmailActive(true)
              }
              else {
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
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: Colors.dark_navy_blue, fontSize: Metrics.ratio(16), fontWeight: "bold" }}>I’m a new user.</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('SignUp')
          }}>
            <Text style={{ color: Colors.footer_green, fontSize: Metrics.ratio(16), fontWeight: "bold" }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <SpinnerLoader isloading={loading} />
    </View>
  );
}
export default SignIn;