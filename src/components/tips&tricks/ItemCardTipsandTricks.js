import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters'
import { router } from 'expo-router'
import Routes from '../../constants/Routes'

const ItemCardTipsandTricks = ({ item }) => {

    const _handleNavigationToDetail = () => {
        router.push(`${Routes.TIPS_TRICKS_DETAIL}`)
    }
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={_handleNavigationToDetail}>
            <View style={{
                backgroundColor: '#fff',
                padding: scale(5),
                gap: scale(5),
                width: moderateScale(120),
                borderRadius: scale(10),
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.18,
                shadowRadius: 1.00,

                elevation: 1,
                marginBottom: moderateVerticalScale(2)

            }}>
                <Image style={{ width: '100%', height: moderateVerticalScale(90), borderRadius: scale(10) }} source={{ uri: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym13JTIwY2FyfGVufDB8fDB8fHww' }} />
                <Text style={{ fontSize: scale(11), fontWeight: '700' }} numberOfLines={1}>Save first, spend la Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, odio?</Text>
                <Text style={{ fontSize: scale(9) }} numberOfLines={2}>As a rule of thumb, it helps to first</Text>
                <Text style={{ fontSize: scale(7) }}>Finance • 10 days ago</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemCardTipsandTricks

const styles = StyleSheet.create({})