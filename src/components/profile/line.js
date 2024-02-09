import { Dimensions, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { moderateVerticalScale } from 'react-native-size-matters'
import ThemeConstant from '../../constants/ThemeConstant'

const Line = () => {
    return (
        <View style={{
            height: moderateVerticalScale(1),
            backgroundColor: '#c3c3c3',
            maxWidth: Dimensions.get('screen').width,
            opacity: 0.6
        }} />

    )
}

export default Line
