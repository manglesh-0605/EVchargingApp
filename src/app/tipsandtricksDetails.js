import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../components/BackButton';
import { Entypo } from '@expo/vector-icons';
import ThemeConstant from '../constants/ThemeConstant';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { AntDesign, FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';
import Line from '../components/profile/line';
import Advert from '../components/classifieds/Advert';
import ItemCardTipsandTricks from '../components/tips&tricks/ItemCardTipsandTricks';



const TipsandtricksDetails = () => {
    const { width } = useWindowDimensions();
    return (
        <SafeAreaView edges={['top']} style={styles.container}>

            {/* Image */}
            <View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'absolute',
                    width: '100%',
                    paddingHorizontal: ThemeConstant.PADDING_MAIN,
                    zIndex: 2
                }}>
                    <BackButton />
                    <Entypo name="dots-three-vertical" size={24} color="black" />

                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        height: moderateVerticalScale(200),
                        width: '100%'
                    }}
                >
                    <Image style={{ width: '100%', height: '100%' }} source={{ uri: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym13JTIwY2FyfGVufDB8fDB8fHww' }} />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: ThemeConstant.PADDING_MAIN, paddingBottom: moderateVerticalScale(20) }}>

                <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: scale(10)
                    }}>
                        <View style={{
                            backgroundColor: '#0085FF',
                            paddingVertical: scale(10),
                            paddingHorizontal: scale(20),
                            borderRadius: scale(10)
                        }}>
                            <Text style={{ fontSize: scale(10), color: 'white' }}>
                                Finance
                            </Text>
                        </View>

                        <Text style={{ fontWeight: '400', fontSize: scale(10), color: ThemeConstant.FADED_BLACK }}>
                            10 days ago
                        </Text>

                    </View>

                    <View style={{ flexDirection: 'row', gap: scale(30) }}>
                        <AntDesign name="sharealt" size={24} color="black" />
                        <FontAwesome name="bookmark-o" size={24} color={'#000'} />
                    </View>


                </View>

                <View style={{ marginVertical: moderateVerticalScale(15) }}>
                    <Line />
                </View>

                <View style={{ gap: scale(8), marginBottom: moderateVerticalScale(20) }}>
                    <Text style={{ fontWeight: '700', fontSize: scale(18), }}>Save first, spend later.</Text>
                    <Text style={{ fontWeight: '400', fontSize: scale(14), lineHeight: scale(24) }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias praesentium et, dicta placeat optio ut obcaecati harum necessitatibus neque quibusdam repellat rem voluptatibus dolores qui ab commodi dignissimos quas? Commodi, sapiente illo. Corrupti asperiores nulla sit illum voluptas, placeat doloremque temporibus numquam saepe alias non corporis atque inventore molestiae commodi? </Text>
                </View>

                <Advert url={'https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg'} />

                <View style={{ gap: scale(8), marginVertical: moderateVerticalScale(20) }}>
                    <Text style={{ fontWeight: '400', fontSize: scale(14), lineHeight: scale(24) }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos dolorum quibusdam nulla aliquid odit est, fugiat laborum quia tempore impedit! Quod eum deserunt quidem, inventore odio sunt quibusdam molestiae ipsum debitis quae id aut natus est suscipit soluta praesentium ipsam culpa distinctio illum minima. Quidem distinctio quod omnis in delectus cupiditate assumenda inventore ratione officia. Officiis quia beatae itaque expedita id eligendi necessitatibus mollitia esse voluptas cumque eaque modi excepturi, earum facere labore. Tempore ab amet laboriosam. Nobis expedita sunt, ab autem inventore sequi cum quod voluptates quibusdam excepturi similique debitis magnam culpa eius ducimus consequuntur eum maxime ullam aliquid?</Text>
                </View>


                <View style={{ gap: scale(10) }}>
                    <Text style={{ fontWeight: '700', fontSize: scale(16) }}>Similar Articles</Text>
                    <FlatList
                        contentContainerStyle={{ gap: scale(10) }}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={[1, 2, 3, 4, 5, 6]}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => {
                            return (
                                <ItemCardTipsandTricks />
                            )
                        }}
                    />
                </View>





            </ScrollView>
        </SafeAreaView>
    )
}

export default TipsandtricksDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: scale(20),
        position: 'relative'
    },
})