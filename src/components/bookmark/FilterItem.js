import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import ThemeConstant from '../../constants/ThemeConstant'

const FilterItem = ({ category, selected }) => {
    return (
        <View style={[styles.categoryContainer, { backgroundColor: selected ? ThemeConstant.PRIMARY_COLOR : '#e4e4e4', borderColor: selected ? ThemeConstant.PRIMARY_COLOR : '#ccc' }]}>
            <Text style={{ color: selected ? '#fff' : '#000' }}>{category}</Text>
        </View>
    )
}

export default FilterItem

const styles = StyleSheet.create({
    categoryContainer: {
        borderWidth: 1,
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateVerticalScale(10),
        borderRadius: scale(100),

    }
})