import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import BackButton from '../../../components/BackButton';
import { Entypo } from '@expo/vector-icons';
import ThemeConstant from '../../../constants/ThemeConstant';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { AntDesign, FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';
import Line from '../../../components/profile/line';
import Advert from '../../../components/classifieds/Advert';
import MapView from 'react-native-maps';



const ClassifiedsDetail = () => {
    const { width } = useWindowDimensions();
    return (
        <SafeAreaView edges={['top']} style={styles.container}>

            {/* Carousel */}
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    width: '100%',
                    paddingHorizontal: ThemeConstant.PADDING_MAIN,
                    zIndex: 2,
                    top: moderateVerticalScale(10)
                }}>
                    <BackButton />
                    <Entypo name="dots-three-vertical" size={24} color="black" />



                </View>
                <View>
                    <Carousel
                        // loop
                        width={width}
                        height={width / 2}
                        // autoPlay={true}
                        data={[...new Array(6).keys()]}
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({ index }) => (
                            <View
                                style={{
                                    flex: 1,
                                    // borderWidth: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <Image style={{ width: '100%', height: '100%' }} source={{ uri: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym13JTIwY2FyfGVufDB8fDB8fHww' }} />
                            </View>
                        )}
                    />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: ThemeConstant.PADDING_MAIN, paddingBottom: moderateVerticalScale(20) }}>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: scale(20), color: ThemeConstant.PRIMARY_COLOR }}>
                        AED 10,000
                    </Text>
                    <View style={{ flexDirection: 'row', gap: scale(30) }}>
                        <AntDesign name="sharealt" size={24} color="black" />
                        <FontAwesome name="bookmark-o" size={24} color={'#000'} />

                    </View>


                </View>

                <View style={{ marginVertical: moderateVerticalScale(8) }}>
                    <Line />
                </View>

                <View style={{ gap: scale(8) }}>
                    <Text style={{ fontWeight: '700', fontSize: scale(18), }}>BMW • X1</Text>
                    <Text style={{ fontWeight: '400', fontSize: scale(12), }}>Explore in-depth product details, including specifications and unique features. </Text>
                </View>

                <View style={{
                    marginTop: moderateVerticalScale(10),
                    gap: scale(15),
                    marginBottom: moderateVerticalScale(20)
                }}>
                    <Text style={{ fontWeight: '700', fontSize: scale(15) }}>Details</Text>

                    <View style={{
                        gap: scale(10)
                    }}>

                        <View style={styles.itemseparate}>
                            <Text style={styles.detailTitle}>
                                Model
                            </Text>
                            <Text>
                                X1
                            </Text>
                        </View>

                        <Line />

                        <View style={styles.itemseparate}>
                            <Text style={styles.detailTitle}>
                                Year
                            </Text>
                            <Text>
                                2019
                            </Text>
                        </View>

                        <Line />

                        <View style={styles.itemseparate}>
                            <Text style={styles.detailTitle}>
                                Kilometers
                            </Text>
                            <Text>
                                10500
                            </Text>
                        </View>

                        <Line />

                        <View style={styles.itemseparate}>
                            <Text style={styles.detailTitle}>
                                Engine
                            </Text>
                            <Text>
                                Petrol
                            </Text>
                        </View>

                        <Line />

                        <Text style={{ fontWeight: '700', fontSize: scale(12), color: ThemeConstant.FADED_BLACK, alignSelf: 'center' }}>Show more details</Text>

                    </View>
                </View>

                <Advert url={'https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg'} />

                <View style={styles.sellercard}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '50%', fontWeight: '400', fontSize: scale(12), color: ThemeConstant.FADED_BLACK }}>
                            Seller
                        </Text>
                        <Text style={{ width: '50%', fontWeight: '400', fontSize: scale(12), color: ThemeConstant.FADED_BLACK }}>
                            ID
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: '50%', fontWeight: '700', fontSize: scale(15), }}>
                            John Wick
                        </Text>
                        <Text style={{ width: '50%', fontWeight: '700', fontSize: scale(15) }}>
                            123456789
                        </Text>
                    </View>

                    <Text style={{ width: '50%', fontWeight: '400', fontSize: scale(12) }}>Member since 2013</Text>

                </View>

                <TouchableOpacity activeOpacity={0.8}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: scale(5),
                        marginBottom: moderateVerticalScale(20)
                    }}>
                    <Feather name="alert-triangle" size={24} color="red" />
                    <Text style={{ color: 'red' }}>Report Advertisement</Text>
                </TouchableOpacity>


                <View style={{ gap: scale(20) }}>
                    <Text style={{ fontWeight: '700', fontSize: scale(15) }}>Address</Text>
                    <Text style={{ fontWeight: '400', fontSize: scale(13) }}>VILLA 6 ZAGLABA ST 99 DUBAI </Text>
                    <View style={{
                        height: moderateVerticalScale(200)
                    }}>
                        <MapView style={styles.map} />
                    </View>
                </View>

            </ScrollView>


            <View style={{
                position: 'absolute',
                bottom: scale(20),
                right: scale(20),
                gap: scale(10)
            }}>
                <TouchableOpacity activeOpacity={0.9} style={styles.iconContainer}>
                    <FontAwesome5 name="whatsapp" size={24} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.9} style={styles.iconContainer}>
                    <FontAwesome5 name="phone" size={20} color="#fff" />
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

export default ClassifiedsDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: scale(20),
        position: 'relative',
        backgroundColor: '#fff'
    }, iconContainer: {
        width: scale(40),
        height: scale(40),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ThemeConstant.PRIMARY_COLOR,
        borderRadius: scale(1000)
    }, itemseparate: {
        flexDirection: 'row',
    },
    detailTitle: {
        fontWeight: '700',
        fontSize: scale(12),
        width: '50%'
    },
    sellercard: {
        marginVertical: moderateVerticalScale(20),
        backgroundColor: '#fff',
        padding: scale(15),
        borderRadius: scale(10),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
        gap: scale(5)
    }, map: {
        width: '100%',
        height: '100%',
    },
})