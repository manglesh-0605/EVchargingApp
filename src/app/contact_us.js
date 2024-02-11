import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../components/BackButton'
import ThemeConstant from '../constants/ThemeConstant'
import { moderateVerticalScale, scale } from 'react-native-size-matters'
import Line from '../components/profile/line'
import Advert from '../components/classifieds/Advert'

const CATEGORIES = [
    {
        id: 1, name: 'EV Charging Station'
    },
    {
        id: 2, name: 'Tips and Tricks'
    },
    {
        id: 3, name: 'Classifieds'
    }
]

const Contactus = () => {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [message, setMessage] = useState('');
    const [characterCount, setCharacterCount] = useState('0')

    const selectACategory = (item) => {
        if (selectedCategory?.name === item.name) setSelectedCategory('');
        else setSelectedCategory(item)

    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: scale(8),
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <BackButton marginTop={0} />
                </View>
                <Text style={{
                    fontWeight: '600',
                    fontSize: scale(20)
                }}>Contact us</Text>

            </View>

            <Text style={{ fontWeight: '400', fontSize: scale(14), marginTop: scale(30), marginBottom: moderateVerticalScale(20) }}>Feel free to reach out through the contact form below</Text>
            <Line />

            <View style={{
                marginTop: moderateVerticalScale(20)
            }}>
                <Text style={{ fontWeight: '700', fontSize: scale(14), marginBottom: moderateVerticalScale(20) }}>Select Category</Text>

                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    rowGap: moderateVerticalScale(20),
                    marginBottom: moderateVerticalScale(20),
                }}>

                    {
                        CATEGORIES.map((item) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => selectACategory(item)}
                                    activeOpacity={1} key={item.id} style={{ flexDirection: 'row', alignItems: 'center', width: '50%', gap: scale(5) }}>
                                    <View style={{
                                        width: scale(15),
                                        height: scale(15),
                                        borderWidth: scale(1),
                                        borderColor: ThemeConstant.PRIMARY_COLOR,
                                        borderRadius: scale(1000),
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            width: scale(10),
                                            height: scale(10),
                                            backgroundColor: selectedCategory?.name == item.name ? ThemeConstant.PRIMARY_COLOR : 'transparent',
                                            borderRadius: scale(1000)
                                        }} />

                                    </View>
                                    <Text>{item.name}</Text>

                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

                <View style={{
                    borderWidth: 1,
                    borderColor: ThemeConstant.FADED_BLACK,
                    height: moderateVerticalScale(120),
                    padding: scale(10),
                    borderRadius: scale(5)
                }}>
                    <TextInput
                        value={message}
                        onChangeText={txt => {
                            const remaingChars = txt.length
                            setCharacterCount(remaingChars)
                            if (txt.length <= 200) {
                                setMessage(txt);
                            }
                        }}
                        multiline
                        numberOfLines={100}
                        placeholder='Your Message'
                        maxLength={200}
                        style={{
                            flex: 1
                        }}
                    />
                </View>

                <Text style={{ alignSelf: 'flex-end', marginTop: scale(5), color: ThemeConstant.FADED_BLACK, fontSize: scale(10), marginBottom: moderateVerticalScale(20) }}>{characterCount}/200</Text>

                <View style={{
                    borderWidth: 1,
                    borderColor: ThemeConstant.FADED_BLACK,
                    height: moderateVerticalScale(210)
                }}>
                    <Image style={{
                        width: '100%',
                        height: '100%'
                    }} source={{ uri: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/130291669/original/966a566e1455049c9af317c89b7cd76bd3ee8416/design-clean-and-owesme-add-banner.png' }} />
                </View>



            </View>


        </SafeAreaView>
    )
}

export default Contactus

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        paddingTop: moderateVerticalScale(30)
    }
})