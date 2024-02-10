import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const Advert = ({ url }) => {
    return (
        <View style={{
            width: '100%', height: moderateScale(90),
            borderWidth: 1,
            borderColor: "#d5d5d5"
        }} >
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                }}
                source={{ uri: url }}
            />
        </View>
    )
}

export default Advert

const styles = StyleSheet.create({})