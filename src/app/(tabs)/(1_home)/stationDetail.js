import { StyleSheet, Text, View, useWindowDimensions, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';
import BackButton from '../../../components/BackButton';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import ThemeConstant from '../../../constants/ThemeConstant';
import { moderateVerticalScale, scale, moderateScale } from 'react-native-size-matters';
import { AntDesign, FontAwesome, FontAwesome5, Feather } from '@expo/vector-icons';
import Line from '../../../components/profile/line';
import MapView from 'react-native-maps';
import CustomButton from '../../../components/CustomButton';
import AddReviewModal from '../../../components/home/AddReviewModal';

const AMENITIES = {
    amenities: [
        {
            id: 0,
            name: 'Parking',
            isPaid: true
        },
        {
            id: 1,
            name: 'Lodging',
            isPaid: false
        },
        {
            id: 2,
            name: 'Dining',
            isPaid: false
        },
        {
            id: 3,
            name: 'Shopping',
            isPaid: false
        }

    ]
}

const CHARGERS = {
    chargers: [
        {
            id: 0,
            name: 'Tesla ABC',
            noOfPorts: 2
        },
        {
            id: 1,
            name: 'Tesla BCD',
            noOfPorts: 3
        },
        {
            id: 2,
            name: 'Tesla CDE',
            noOfPorts: 2
        },
        {
            id: 3,
            name: 'Tesla DEF',
            noOfPorts: 1
        }

    ]
}

const TIMINGS = {
    timings: [
        {
            id: 0,
            day: "Monday",
            timingRange: "06:00 - 12:00"
        },
        {
            id: 1,
            day: "Tuesday",
            timingRange: "06:00 - 12:00"
        },
        {
            id: 2,
            day: "Wednesday",
            timingRange: "06:00 - 12:00"
        },
        {
            id: 3,
            day: "Thursday",
            timingRange: "06:00 - 12:00"
        },
        {
            id: 4,
            day: "Friday",
            timingRange: "06:00 - 12:00"
        },
        {
            id: 5,
            day: "Saturday",
            timingRange: "06:00 - 12:00"
        },
        {
            id: 6,
            day: "Sunday",
            timingRange: "06:00 - 12:00"
        }
    ]
};




const StationDetail = () => {
    const { width } = useWindowDimensions();
    const [chargersShowing, setChargersShowing] = useState(true);
    const [timingsShowing, setTimingShowing] = useState(true);
    const [reviewModalVisible, setReviewModalVisible] = useState(false)
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
                        height={width / 1.5}
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

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: ThemeConstant.PADDING_MAIN, paddingBottom: moderateVerticalScale(20), gap: scale(20) }}>

                {/* STATION DETAILS */}
                <View style={{ flexDirection: 'row', justifyContent: "space-between", }}>

                    <View style={{ gap: scale(10) }}>
                        <View style={{ gap: scale(10) }}>
                            <Text style={{ fontWeight: '700', fontSize: scale(12) }}>AED 10,000/kwh</Text>
                            <Text style={{ fontWeight: '700', fontSize: scale(16) }}>EV Charging Station</Text>
                            <Text style={{ fontWeight: '400', fontSize: scale(10) }}>Villa 6 Zaglaba st 99, Dubai </Text>
                        </View>

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

                            <Text style={{ fontWeight: '400', fontSize: scale(8), color: ThemeConstant.FADED_BLACK }}>(25 reviews)</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(10) }}>
                            <View style={{
                                backgroundColor: ThemeConstant.PRIMARY_COLOR,
                                borderRadius: scale(5),
                                paddingHorizontal: moderateScale(10),
                                paddingVertical: moderateVerticalScale(8)
                            }}>
                                <Text style={{ fontWeight: '700', fontSize: scale(8), color: '#fff' }}>Available</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(2) }}>
                                <Entypo name="location-pin" size={20} color={ThemeConstant.FADED_BLACK} />
                                <Text style={{ fontWeight: '400', fontSize: scale(10), color: '#0E1617', opacity: 0.5 }}>3.8 km</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: scale(5) }}>
                                <AntDesign name="car" size={20} color={ThemeConstant.FADED_BLACK} />
                                <Text style={{ fontWeight: '400', fontSize: scale(10), color: '#0E1617', opacity: 0.5 }}>10 mins</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', gap: scale(30) }}>
                        <AntDesign name="sharealt" size={24} color="black" />
                        <FontAwesome name="bookmark-o" size={24} color={'#000'} />

                    </View>


                </View>

                <Line />


                {/* BUTTONS       */}
                <View style={{ gap: scale(8), flexDirection: 'row' }}>
                    <View style={{ width: '50%' }}>
                        <CustomButton title={"Add Review"} type='outline' onPress={() => setReviewModalVisible(true)} />

                    </View>
                    <View style={{ width: '50%' }}>
                        <CustomButton title={"Get Direction"} />

                    </View>
                </View>


                <Line />


                {/* ABOUT */}
                <View style={{ gap: scale(10) }}>
                    <Text style={{ fontWeight: '700', fontSize: scale(15) }}>About</Text>

                    <View style={{
                        gap: scale(20)
                    }}>

                        <Text style={{ fontWeight: '400', fontSize: scale(12), lineHeight: scale(18) }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum debitis aut explicabo voluptates dicta iusto velit, repellat odit unde minima non optio officiis, reiciendis sit recusandae reprehenderit dolores esse? Ab.</Text>

                        <Line />
                    </View>
                </View>

                {/* Amenities */}
                <View style={{ gap: scale(10) }}>
                    <Text style={{ fontWeight: '400', fontSize: scale(8), color: ThemeConstant.FADED_BLACK }}>Amenities</Text>
                    <View>
                        <FlatList
                            contentContainerStyle={{ flex: 1, gap: scale(10) }}
                            horizontal
                            data={AMENITIES.amenities}
                            key={(item, index) => item.id + index}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: scale(10) }}>{item.name}</Text>
                                        <Text style={{ fontSize: scale(10) }}>{`${item.isPaid ? "(Paid)" : ''}`}</Text>
                                        {
                                            index < AMENITIES.amenities.length - 1 && <Text style={{ fontWeight: 'bold', fontSize: scale(14), marginLeft: scale(10) }}>•</Text>
                                        }
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>

                <Line />

                {/* CHARGERS */}
                <View style={{
                    borderWidth: 1,
                    borderColor: '#d4d4d4',
                    padding: scale(10),
                    borderRadius: scale(5),
                    gap: scale(10)

                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: scale(12) }}>Chargers</Text>
                        <TouchableOpacity onPress={() => setChargersShowing(!chargersShowing)}>
                            <Entypo name={chargersShowing ? "chevron-small-up" : "chevron-small-down"} size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    {chargersShowing && <Line />}

                    {chargersShowing &&
                        <View style={{ gap: scale(10) }}>
                            {
                                CHARGERS.chargers.map(item => {
                                    return (
                                        <View key={item.id}
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                            <View style={{
                                                flexDirection: "row",
                                                alignItems: 'center',
                                                gap: scale(10)
                                            }}>
                                                <MaterialCommunityIcons name="ev-plug-type2" size={24} color="black" />
                                                <Text style={{ fontWeight: '400', fontSize: scale(12) }}>{item.name}</Text>
                                            </View>
                                            <Text style={{ fontWeight: '700', fontSize: scale(10), fontStyle: 'italic' }}>{item.noOfPorts} Ports</Text>

                                        </View>
                                    )
                                })
                            }

                        </View>
                    }
                </View>


                {/* TIMINGS */}
                <View style={{
                    borderWidth: 1,
                    borderColor: '#d4d4d4',
                    padding: scale(10),
                    borderRadius: scale(5),
                    gap: scale(10)

                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: scale(12) }}>Chargers</Text>
                        <TouchableOpacity onPress={() => setTimingShowing(!timingsShowing)}>
                            <Entypo name={chargersShowing ? "chevron-small-up" : "chevron-small-down"} size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    {timingsShowing && <Line />}

                    {timingsShowing &&
                        <View style={{ gap: scale(10) }}>
                            {
                                TIMINGS.timings.map(item => {
                                    return (
                                        <View key={item.id}
                                            style={{
                                                flexDirection: "row",
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}>
                                            <Text style={{ fontWeight: '400', fontSize: scale(12) }}>{item.day}</Text>
                                            <Text style={{ fontWeight: '700', fontSize: scale(10), fontStyle: 'italic' }}>{item.timingRange}</Text>

                                        </View>
                                    )
                                })
                            }

                        </View>
                    }
                </View>


                {/* Report Station */}
                <TouchableOpacity activeOpacity={0.8}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: scale(5),
                    }}>
                    <Feather name="alert-triangle" size={20} color="red" />
                    <Text style={{ color: 'red' }}>Report Station</Text>
                </TouchableOpacity>


                {/* MAP */}
                <View style={{ gap: scale(10) }}>
                    <Text style={{ fontWeight: '700', fontSize: scale(15) }}>Location</Text>

                    <View style={{
                        height: moderateVerticalScale(200)
                    }}>
                        <MapView style={styles.map} provider='google' />
                    </View>
                </View>

            </ScrollView>


            <AddReviewModal isVisible={reviewModalVisible} setIsVisible={setReviewModalVisible} />
        </SafeAreaView>
    )
}

export default StationDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: scale(20),
        position: 'relative'
    }, map: {
        width: '100%',
        height: '100%',
    },
})