// DrawerModal.js
import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons';
import ThemeConstant from '../../constants/ThemeConstant';
import { router } from 'expo-router';
import Routes from '../../constants/Routes';

const HomeModal = ({ isVisible, setIsVisible, item }) => {

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => setIsVisible(false)}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => {
                    setIsVisible(false)
                    router.push({ pathname: `${Routes.HOME_STATION_DETAIL}`, params: { id: item.id } });
                }}>
                    <View style={styles.drawerContent}>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{ gap: scale(10) }}>
                                <Text style={{ fontWeight: '700', fontSize: scale(12) }}>{`AED ${item.price}/kwh`}</Text>
                                <Text style={{ fontWeight: '700', fontSize: scale(16) }}>{item.name}</Text>
                                <Text style={{ fontWeight: '400', fontSize: scale(10) }}>{item.address}</Text>
                            </View>
                            <TouchableOpacity onPress={() => setIsVisible(false)} >
                                <Entypo name="cross" size={26} color="black" />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(8) }}>
                                <Text style={{ fontWeight: '700', fontSize: scale(8) }}>5.0</Text>
                                <View style={{ flexDirection: 'row', gap: scale(2) }}>

                                    {
                                        Array.from([1, 2, 3, 4, 5]).map((item, index) => {
                                            return (
                                                <View key={index} >
                                                    <AntDesign name="star" size={15} color="#FFB800" />
                                                </View>
                                            )
                                        })
                                    }
                                </View>

                                <Text style={{ fontWeight: '400', fontSize: scale(8), color: ThemeConstant.FADED_BLACK }}>({item.numReviews} reviews)</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(10) }}>
                            <View style={{
                                backgroundColor: item.isAvailable ? ThemeConstant.PRIMARY_COLOR : "gray",
                                borderRadius: scale(5),
                                paddingHorizontal: moderateScale(10),
                                paddingVertical: moderateVerticalScale(8)
                            }}>
                                <Text style={{ fontWeight: '700', fontSize: scale(8), color: '#fff' }}>{item.isAvailable ? "Available" : "UnAvailable"}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(2) }}>
                                <Entypo name="location-pin" size={24} color={ThemeConstant.FADED_BLACK} />
                                <Text style={{ fontWeight: '400', fontSize: scale(10), color: '#0E1617', opacity: 0.5 }}>3.8 km</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(5) }}>
                                <AntDesign name="car" size={24} color={ThemeConstant.FADED_BLACK} />
                                <Text style={{ fontWeight: '400', fontSize: scale(10), color: '#0E1617', opacity: 0.5 }}>10 mins</Text>
                            </View>
                        </View>

                        <View>

                            <View style={{ flexDirection: 'row', gap: scale(2), alignItems: 'center' }}>
                                <Text style={{ fontWeight: '400', fontSize: scale(10) }}>{item.vehicleType}</Text>
                                <Text style={{ fontWeight: '700', fontSize: scale(14) }}>•</Text>
                                <Text style={{ fontWeight: '400', fontSize: scale(10) }}>{item.numPlugs} Plugs</Text>
                            </View>

                        </View>

                        <View style={{
                            flexDirection: 'row',
                            gap: scale(10)
                        }}>
                            <TouchableOpacity
                                onPress={() => { }}
                                activeOpacity={0.7}
                                style={{
                                    width: scale(40),
                                    aspectRatio: 1 / 1,
                                    borderWidth: scale(1.4),
                                    borderColor: ThemeConstant.PRIMARY_COLOR,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: scale(1000)
                                }}>
                                <Entypo name="share" size={24} color={ThemeConstant.PRIMARY_COLOR} />

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { }}
                                activeOpacity={0.7}
                                style={{
                                    width: scale(40),
                                    aspectRatio: 1 / 1,
                                    borderWidth: scale(1.4),
                                    borderColor: ThemeConstant.PRIMARY_COLOR,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: scale(1000)
                                }}>
                                <FontAwesome name="bookmark-o" size={24} color={ThemeConstant.PRIMARY_COLOR} />

                            </TouchableOpacity>
                            <View style={{
                                backgroundColor: ThemeConstant.PRIMARY_COLOR,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: scale(100),
                                paddingHorizontal: scale(20)
                            }}>
                                <Text style={{ color: '#fff', fontWeight: '700', fontSize: scale(12) }}>
                                    Get Direction
                                </Text>

                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: moderateVerticalScale(100),
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    drawerContent: {
        width: '85%',
        backgroundColor: '#fff',
        gap: scale(15),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        borderRadius: scale(10),
        padding: ThemeConstant.PADDING_MAIN
    },
});

export default HomeModal;
