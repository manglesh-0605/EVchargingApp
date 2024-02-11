import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters'
import { Entypo } from '@expo/vector-icons';
import ThemeConstant from '../constants/ThemeConstant';

const DrawerButton = () => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={{
            width: scale(40),
            aspectRatio: 1 / 1,
            borderWidth: scale(1.4),
            borderColor: ThemeConstant.PRIMARY_COLOR,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: scale(1000)
        }}>
            <Entypo name="menu" size={24} color={ThemeConstant.PRIMARY_COLOR} />

        </TouchableOpacity>
    )
}

export default DrawerButton

const styles = StyleSheet.create({})