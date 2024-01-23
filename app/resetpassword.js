import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'
import InputField from '../src/components/InputField';
import { AntDesign } from '@expo/vector-icons';
import ThemeConstant from '../src/constants/ThemeConstant';
import CustomButton from '../src/components/CustomButton';
import BackButton from '../src/components/BackButton';


const ResetPassword = () => {
    const [password, setPasseord] = useState('');
    const [confirmPassword, setConrimPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here

    };






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

export default ResetPassword;
