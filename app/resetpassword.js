import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import InputField from '../src/components/InputField';
import ThemeConstant from '../src/constants/ThemeConstant';
import CustomButton from '../src/components/CustomButton';
import BackButton from '../src/components/BackButton';
import { moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import { StatusBar } from 'expo-status-bar';


const ResetPassword = () => {
    const [password, setPasseord] = useState('');
    const [confirmPassword, setConrimPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleLogin = () => {
        // Implement your login logic here
        setShowModal(true)

    };

    const toggleModal = () => {
        setShowModal(!showModal);
    }






    return (
        <SafeAreaView style={styles.container}>

            <BackButton marginBottom={52} />

            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.subtitle}>Please enter the 6 digit otp.</Text>
            <View style={{
                marginBottom: 20
            }}>
                <InputField
                    placeholder="New Password"
                    value={password}
                    iconname={'lock'}
                    onChangeText={(text) => setPasseord(text)}
                    secureTextEntry
                />
            </View>

            <View style={{
                marginBottom: 40
            }}>

                <InputField
                    placeholder="Confirm New Password"
                    value={confirmPassword}
                    iconname={'lock'}
                    onChangeText={(text) => setConrimPassword(text)}
                    secureTextEntry
                />
            </View>
            <CustomButton title="Set Password" onPress={handleLogin} />

            {
                showModal &&
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                        setShowModal(!showModal);
                    }}>
                    <StatusBar hidden={true} />
                    <TouchableOpacity activeOpacity={1} onPress={toggleModal} style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.check}>
                                <AntDesign name="check" size={50} color="#fff" />
                            </View>
                            <Text style={styles.modaltitle}>Password Changed
                                Successfully!</Text>
                            <Text style={styles.modalsubtitle}>Your Password is changed successfully.
                                Please login again to continue</Text>
                        </View>
                    </TouchableOpacity>
                </Modal>
            }



        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 52,
    },
    subtitle: {
        color: ThemeConstant.FADED_BLACK,
        marginBottom: 52
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(22),
        paddingHorizontal: moderateScale(28),
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalView: {
        width: '100%',
        height: moderateVerticalScale(300),
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modaltitle: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 15,
        textAlign: 'center',
        marginVertical: 20
    },
    check: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: 80,
        backgroundColor: ThemeConstant.PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalsubtitle: {
        color: ThemeConstant.FADED_BLACK,
        textAlign: 'center',
        fontSize: 14
    }
});

export default ResetPassword;
