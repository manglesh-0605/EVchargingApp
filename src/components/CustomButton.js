import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import ThemeConstant from '../constants/ThemeConstant';

const CustomButton = ({ title, onPress, type = 'filled' }) => {
    return (
        <TouchableOpacity style={{
            ...styles.button,
            backgroundColor: type == 'filled' ? ThemeConstant.PRIMARY_COLOR : '#fff',
            borderWidth: type == 'filled' ? 0 : 1,
            borderColor: type == 'filled' ? null : ThemeConstant.PRIMARY_COLOR
        }} onPress={onPress}>
            <Text style={{
                ...styles.buttonText,
                color: type == 'filled' ? '#ffffff' : ThemeConstant.PRIMARY_COLOR,

            }}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {

        padding: 10,
        borderRadius: 100,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600'
    },
});

export default CustomButton;
