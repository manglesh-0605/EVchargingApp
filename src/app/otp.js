import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'
import InputField from '../components/InputField';
import { AntDesign } from '@expo/vector-icons';
import ThemeConstant from '../constants/ThemeConstant';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';
import { moderateScale } from 'react-native-size-matters';
import Routes from '../constants/Routes';


const OtpScreen = () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');


    const handleLogin = () => {
        // Implement your login logic here
        console.log('Login button pressed');
        router.replace(`${Routes.TABS}`);
    };





    return (
        <SafeAreaView style={styles.container}>

            <BackButton marginBottom={52} />

            <Text style={styles.title}>Enter OTP</Text>
            <Text style={styles.subtitle}>Please enter the 6 digit otp.</Text>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 40
            }}>

                <View style={{
                    marginBottom: 20,
                    width: moderateScale(40)
                }}>
                    <InputField
                        placeholder=""
                        value={value1}
                        onChangeText={(text) => value1(text)}
                    />

                </View>
                <View style={{
                    marginBottom: 20,
                    width: moderateScale(40)
                }}>
                    <InputField
                        placeholder=""
                        value={value2}
                        onChangeText={(text) => value2(text)}
                    />

                </View>
                <View style={{
                    marginBottom: 20,
                    width: moderateScale(40)
                }}>
                    <InputField
                        placeholder=""
                        value={value3}
                        onChangeText={(text) => setValue3(text)}
                    />

                </View>
                <View style={{
                    marginBottom: 20,
                    width: moderateScale(40)
                }}>
                    <InputField
                        placeholder=""
                        value={value4}
                        onChangeText={(text) => setValue4(text)}
                    />

                </View>
                <View style={{
                    marginBottom: 20,
                    width: moderateScale(40)
                }}>
                    <InputField
                        placeholder=""
                        value={value5}
                        onChangeText={(text) => setValue5(text)}
                    />

                </View>
                <View style={{
                    marginBottom: 20,
                    width: moderateScale(40)
                }}>
                    <InputField
                        placeholder=""
                        value={value6}
                        onChangeText={(text) => setValue6(text)}
                    />

                </View>

            </View>

            <CustomButton title="Submit" onPress={handleLogin} />

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
    forgotpasswordText: {
        color: ThemeConstant.FADED_BLACK,
        textAlign: 'right',
        marginTop: 5,
        marginBottom: 40
    },
    or: {
        color: ThemeConstant.FADED_BLACK,
        textAlign: 'center',
        margin: 8
    },
    signup: {
        fontWeight: 'bold',
    },
    signupbox: {

    }
});

export default OtpScreen;
