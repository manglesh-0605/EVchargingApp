import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import ThemeConstant from '../../constants/ThemeConstant'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ClassifiedsCategoryItem = ({ category, selected, iconName }) => {
    return (
        <View style={[styles.categoryContainer]}>

            <MaterialCommunityIcons name={iconName} size={24} color={ThemeConstant.PRIMARY_COLOR} />
            <Text style={{ color: '#000', fontSize: scale(12), fontWeight: '400' }}>{category}</Text>
        </View>
    )
}

export default ClassifiedsCategoryItem;

const styles = StyleSheet.create({
    categoryContainer: {
        width: moderateScale(100),
        height: moderateScale(100),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: scale(5),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    }
})