import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../../constants/ThemeConstant';
import { router } from 'expo-router';

const ClassifiedItemCard = ({ item }) => {

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer} onPress={() => router.push('(classifieds)/classifiedsDetail')}>
            <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym13JTIwY2FyfGVufDB8fDB8fHww' }} />

            <View style={styles.detailContainer}>
                <Text style={{ fontWeight: '700', fontSize: scale(16), color: ThemeConstant.PRIMARY_COLOR }}>AED 10,000</Text>
                <Text style={{ fontWeight: '700', fontSize: scale(14), color: '#000' }}>BMW • X1</Text>
                <Text style={{ fontWeight: '400', fontSize: scale(8), color: '#000', opacity: .5 }}>2016 • 1000 km</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ClassifiedItemCard;

const styles = StyleSheet.create({
    cardContainer: {
        // height: moderateVerticalScale(129),
        width: moderateScale(150),
        backgroundColor: '#fff',
        padding: scale(4),
        position: 'relative',
        borderRadius: scale(10),
        gap: moderateScale(10)
    },
    img: {
        height: moderateScale(80),
        borderRadius: scale(10),

    },
    detailContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "space-around"

    },
    iconContainer: {
        position: 'absolute',
        top: scale(10),
        right: scale(15)
    }
})