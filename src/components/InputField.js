import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ThemeConstant from '../constants/ThemeConstant';

const InputField = ({ placeholder, value, onChangeText, secureTextEntry = false, iconname = null }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>

            {value == '' && iconname !== null && <AntDesign name={iconname} size={18} color={ThemeConstant.FADED_BLACK} />}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry && !isPasswordVisible}
            />
            {secureTextEntry && (
                <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
                    {
                        isPasswordVisible ? <FontAwesome name="eye" size={20} color={ThemeConstant.FADED_BLACK} /> : <FontAwesome name="eye-slash" size={20} color={ThemeConstant.FADED_BLACK} />
                    }
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        paddingLeft: 10,
        borderRadius: 4
    },
    input: {
        flex: 1,
        paddingLeft: 5,
    },
    eyeButton: {
        padding: 10,
    },
    eyeIcon: {
        width: 10,
        height: 10,
    },
});

export default InputField;
