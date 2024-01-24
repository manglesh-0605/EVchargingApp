import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'
import InputField from '../components/InputField';
import { AntDesign } from '@expo/vector-icons';
import ThemeConstant from '../constants/ThemeConstant';
import CustomButton from '../components/CustomButton';
import BackButton from '../components/BackButton';


const ForgotPassword = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Send OTP button pressed');
        router.push('./resetpassword');

    };



    return (
        <SafeAreaView style={styles.container}>

            <BackButton marginBottom={52} />

            <Text style={styles.title}>Forgot Password?</Text>
            <Text style={styles.subtitle}>Please enter your registered phone number. We will send an OTP to reset your password.</Text>
            <View style={{
                marginBottom: 52
            }}>
                <InputField
                    placeholder="Phone"
                    value={phone}
                    iconname={'phone'}
                    onChangeText={(text) => setPhone(text)}
                />
            </View>

            <CustomButton title="Send OTP" onPress={handleLogin} />
            <Text style={styles.forgotpasswordText}>Resend OTP</Text>





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

export default ForgotPassword;
