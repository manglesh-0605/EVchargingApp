import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'
import InputField from '../src/components/InputField';
import { AntDesign } from '@expo/vector-icons';
import ThemeConstant from '../src/constants/ThemeConstant';
import CustomButton from '../src/components/CustomButton';
import BackButton from '../src/components/BackButton';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Login button pressed');
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleLoginWithPhone = () => {
        // Implement your sign-up logic here
        console.log('Sign Up button pressed');
    };

    const handleSignup = () => {
        router.push('/signup')
    }




    return (
        <SafeAreaView style={styles.container}>

            <BackButton marginBottom={52} />

            <Text style={styles.title}>Welcome Back,</Text>
            <Text style={styles.subtitle}>Please Login to Continue!</Text>
            <View style={{
                marginBottom: 20
            }}>
                <InputField
                    placeholder="Username"
                    value={username}
                    iconname={'user'}
                    onChangeText={(text) => setUsername(text)}
                />
            </View>

            <InputField
                placeholder="Password"
                value={password}
                iconname={'lock'}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Text style={styles.forgotpasswordText}>Forgot Password?</Text>
            <CustomButton title="Login" onPress={handleLogin} />
            <Text style={styles.or}>or</Text>
            <View style={{
                marginBottom: 190
            }}>
                <CustomButton type='outline' title="Login with Phone no." onPress={handleLoginWithPhone} />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <View style={{
                    margin: 0,
                    padding: 0,
                    padding: 5
                }}>
                    <Text>Don’t have an account?</Text>
                </View>

                <TouchableOpacity
                    onPress={handleSignup}
                    style={{
                        margin: 0,
                        padding: 0,
                        paddingVertical: 5,
                        borderBottomWidth: 2,
                        borderBottomColor: ThemeConstant.PRIMARY_COLOR
                    }}>
                    <Text style={styles.signup}>Sign up</Text>
                </TouchableOpacity>

            </View>

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

export default LoginScreen;
