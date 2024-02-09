import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../../constants/ThemeConstant';

const Itemcard = ({ item }) => {

    // icon name bookmark-o for open

    return (
        <View style={styles.cardContainer}>
            <Image style={styles.img} source={{ uri: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym13JTIwY2FyfGVufDB8fDB8fHww' }} />

            <View style={styles.detailContainer}>
                <Text style={{ fontWeight: '700', fontSize: scale(8) }}>Vehicles</Text>
                <Text style={{ fontWeight: '700', fontSize: scale(16), color: ThemeConstant.PRIMARY_COLOR }}>AED 10,000</Text>
                <Text style={{ fontWeight: '700', fontSize: scale(14), color: '#000' }}>BMW • X1</Text>
                <Text numberOfLines={2} style={{ fontWeight: '400', fontSize: scale(10), color: '#0E1617' }}>Explore in-depth product details, including specifications and unique features. </Text>
                <Text style={{ fontWeight: '400', fontSize: scale(8), color: '#000', opacity: .5 }}>2016 • 1000 km</Text>
            </View>

            <View style={styles.iconContainer}>
                <FontAwesome name="bookmark" size={24} color={ThemeConstant.PRIMARY_COLOR} />
            </View>
        </View>
    )
}

export default Itemcard

const styles = StyleSheet.create({
    cardContainer: {
        height: moderateVerticalScale(109),
        backgroundColor: '#fff',
        padding: scale(8),
        position: 'relative',
        flexDirection: 'row',
        borderRadius: scale(10),
        gap: moderateScale(8)
    },
    img: {
        width: moderateScale(120),
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