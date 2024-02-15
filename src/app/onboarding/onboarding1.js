import { StyleSheet, Text, TouchableOpacity, View, Pressable, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import Img1 from '../../../assets/onboarding/frame1.png'
import ThemeConstant from '../../constants/ThemeConstant';
import { router } from 'expo-router'
import Routes from '../../constants/Routes';

const Onboading1 = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.img}>
                <Image source={Img1} />
            </View>
            <Text style={styles.title1}>Find</Text>
            <Text style={styles.title2}>Charging Stations</Text>
            <Text style={styles.subTitle}>Submit, rate, report & save your favorite stations</Text>

            <View style={{
                flexDirection: 'row',
                marginBottom: moderateScale(70)
            }}>
                <View style={[styles.bar, { backgroundColor: ThemeConstant.PRIMARY_COLOR }]} />
                <View style={styles.bar} />
                <View style={styles.bar} />
            </View>

            <View style={{
                flexDirection: 'row',
                width: '60%',
                alignSelf: 'flex-end',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => { router.replace(`${Routes.LOGIN}`) }}>
                    <Text style={{ color: ThemeConstant.PRIMARY_COLOR, fontWeight: '700' }}>Skip</Text>
                </TouchableOpacity>

                <Pressable
                    onPress={() => { router.replace(`${Routes.ONBOADRIND2}`); }}
                    style={{
                        backgroundColor: ThemeConstant.PRIMARY_COLOR,
                        paddingHorizontal: moderateScale(40),
                        paddingVertical: moderateVerticalScale(15),
                        borderRadius: scale(40)
                    }}>
                    <Text style={{ color: '#fff', fontWeight: '700' }}>Next</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Onboading1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: ThemeConstant.PADDING_MAIN
    },
    title1: {
        fontSize: scale(16),
        color: '#000',
        fontWeight: '700'
    },
    title2: {
        fontSize: scale(30),
        color: '#000',
        fontWeight: '700',
        marginBottom: moderateScale(16)
    },
    subTitle: {
        fontSize: scale(16),
        color: '#999',
        marginBottom: moderateVerticalScale(23)
    },
    img: {
        marginTop: moderateScale(106),
        marginBottom: moderateScale(81),
        alignItems: 'center',
    },
    bar: {
        height: moderateVerticalScale(5),
        width: moderateScale(25),
        backgroundColor: '#e4e4e4',
        borderRadius: 100,
        marginRight: moderateScale(10)
    }
})