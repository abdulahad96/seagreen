import React, { Component,useState } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../components/Header'
import { Metrics, Colors, Fonts, Images } from '../../theme';
import styles from './styles';
import ButtonContainer from '../../components/Button'
import ModalView from '../../components/ModalView'


const Notification = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
 
    return (
        <View style={{ ...styles.container }}>
            <Header
                headerCustom={{backgroundColor:Colors.footer_green}}
                headerText='Offer Notification'
                rightIcon={Images.cross}
                rightBtnPress={()=>{navigation.pop()}}
            />
            <View style={{ alignItems: "center",marginTop:Metrics.screenHeight*0.03 }}>
                <View style={{
                    flexDirection: "column",
                    backgroundColor: Colors.white,
                    width: Metrics.screenWidth * 0.95,
                    borderRadius: Metrics.ratio(5),
                    paddingVertical: Metrics.ratio(10)
                }}>
                    <View style={{ paddingVertical: Metrics.ratio(5), paddingHorizontal: Metrics.screenWidth * 0.02, flexDirection: "row", justifyContent: "space-between", borderBottomColor: Colors.sea_light_grey, borderBottomWidth: Metrics.ratio(2) }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: Metrics.ratio(14) }}>STATUS</Text>
                            <Text style={{ fontSize: Metrics.ratio(20), fontWeight: "bold", letterSpacing: Metrics.ratio(2) }}>Baled</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: Metrics.ratio(14) }}>OFFER RECIEVED</Text>
                            <Text style={{ fontSize: Metrics.ratio(20), fontWeight: "bold", letterSpacing: Metrics.ratio(2) }}>IDR 400</Text>
                        </View>
                    </View>
                    <View style={{ paddingVertical: Metrics.ratio(5), paddingHorizontal: Metrics.screenWidth * 0.02, flexDirection: "row", justifyContent: "space-between", }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: Metrics.ratio(14) }}>BATCH ID</Text>
                            <Text style={{ fontSize: Metrics.ratio(20), fontWeight: "bold", letterSpacing: Metrics.ratio(2) }}>Th8829jqbaksdw</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <View style={{ backgroundColor: Colors.lignt_green }}>
                                <Image style={{ width: 44, height: 44 }} source={Images.map} />
                            </View>
                        </View>
                    </View>
                    <View style={{ backgroundColor: Colors.sea_light_grey, paddingVertical: Metrics.ratio(5), paddingHorizontal: Metrics.screenWidth * 0.02, flexDirection: "row", justifyContent: "space-between", borderBottomColor: Colors.sea_light_grey, borderBottomWidth: Metrics.ratio(1), borderBottomWidth: Metrics.ratio(1) }}>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: Metrics.ratio(14) }}>BUYERS NAME</Text>
                            <Text style={{ fontSize: Metrics.ratio(20), fontWeight: "bold", letterSpacing: Metrics.ratio(2) }}>AndyLaw</Text>
                        </View>
                        <View style={{ flexDirection: "column" }}>
                            <Text style={{ fontSize: Metrics.ratio(14) }}>BUYER ID</Text>
                            <Text style={{ fontSize: Metrics.ratio(20), fontWeight: "bold", letterSpacing: Metrics.ratio(2) }}>002345</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                        <ButtonContainer
                            btnInnerStyle={styles.declineButtonView}
                            btnTxt="Decline"
                            txtStyle={styles.declineBtnTxt}
                            onPress={() => {
                                navigation.navigate('Home')
                            }}
                        />
                        <ButtonContainer
                            btnInnerStyle={styles.acceptButtonView}
                            btnTxt="Accept"
                            txtStyle={styles.acceptBtnTxt}
                            onPress={()=>{setModalVisible(true)}} 
                        />
                    </View>

                </View>
            </View>
            <ModalView
                showModal={modalVisible}
                title={"Acceptance Sent"}
                btnTxt={"OK"}
                closeModal={() => { setModalVisible(!modalVisible) }}
            />
        </View>
    );
}
export default Notification;