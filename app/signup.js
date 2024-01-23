import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router'
import InputField from '../src/components/InputField';
import { AntDesign } from '@expo/vector-icons';
import ThemeConstant from '../src/constants/ThemeConstant';
import CustomButton from '../src/components/CustomButton';
import BackButton from '../src/components/BackButton';
import GoogleLogo from '../assets/social/google.png'
import FbLogo from '../assets/social/facebook.png'
import AppleLogo from '../assets/social/apple.png'



const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [email, setemail] = useState('');

    const handleLogin = () => {
        // Implement your login logic here
        router.back();
    };

    const handleSignUp = () => {
        // Implement your sign-up logic here
        console.log('Sign Up button pressed');
    };



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackButton marginBottom={52} />

                <Text style={styles.title}>Create account</Text>
                <Text style={styles.subtitle}>Sign up to get started!</Text>
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
                <View style={{
                    marginBottom: 20
                }}>
                    <InputField
                        placeholder="E-mail"
                        value={email}
                        iconname={'mail'}
                        onChangeText={(text) => setemail(text)}
                    />
                </View>
                <View style={{
                    marginBottom: 20
                }}>
                    <InputField
                        placeholder="Phone number"
                        iconname={'phone'}
                        value={phonenumber}
                        onChangeText={(text) => setphonenumber(text)}
                    />
                </View>

                <View style={{
                    marginBottom: 52
                }}>
                    <InputField
                        placeholder="Password"
                        iconname={'lock'}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                </View>


                <CustomButton title="Sign up" onPress={handleSignUp} />
                <Text style={styles.or}>or continue with</Text>

                <View style={styles.pngHolderMain}>
                    <TouchableOpacity style={styles.pngButton}>
                        <Image style={styles.png} source={GoogleLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pngButton}>
                        <Image style={styles.png} source={AppleLogo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.pngButton}>
                        <Image style={styles.png} source={FbLogo} />
                    </TouchableOpacity>

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
                        <Text>Already member? </Text>
                    </View>

                    <TouchableOpacity
                        onPress={handleLogin}

                        style={{
                            margin: 0,
                            padding: 0,
                            paddingVertical: 5,
                            borderBottomWidth: 2,
                            borderBottomColor: ThemeConstant.PRIMARY_COLOR
                        }}>
                        <Text style={styles.signup}>Log in</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        backgroundColor: '#fff'
    },
    backButton: {
        marginBottom: 52
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
        margin: 12
    },
    signup: {
        fontWeight: 'bold',
    },
    pngHolderMain: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        marginBottom: 52
    },
    pngButton: {
        height: 60,
        width: 90,
        backgroundColor: '#F0F5F2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100
    },
    png: {
        width: 30,
        height: 30
    }

});

export default SignUp;
