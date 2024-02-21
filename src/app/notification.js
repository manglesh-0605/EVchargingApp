import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '../components/BackButton'
import ThemeConstant from '../constants/ThemeConstant'
import { moderateVerticalScale, scale } from 'react-native-size-matters'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Line from '../components/profile/line'

const NOTIFICATIONS = {
    AllNotifications: [
        {
            "date": "2024-02-12",
            "notifications": [
                {
                    "id": 1,
                    "time": "08:30 AM",
                    "message": "Meeting with the team"
                },
                {
                    "id": 2,
                    "time": "12:00 PM",
                    "message": "Lunch with a friend"
                },
                {
                    "id": 3,
                    "time": "03:00 PM",
                    "message": "Submit project report"
                },
                {
                    "id": 4,
                    "time": "10:45 AM",
                    "message": "Training session"
                },
                {
                    "id": 5,
                    "time": "02:30 PM",
                    "message": "Client meeting"
                }
                // Add more notifications for this date
            ]
        },
        {
            "date": "2024-02-11",
            "notifications": [
                {
                    "id": 2,
                    "time": "12:00 PM",
                    "message": "Lunch with a friend"
                }
                // Add more notifications for this date
            ]
        },
        {
            "date": "2024-02-09",
            "notifications": [
                {
                    "id": 3,
                    "time": "03:00 PM",
                    "message": "Submit project report"
                }
                // Add more notifications for this date
            ]
        },
        // Add more date entries with their respective notifications
    ]
}




const Notification = () => {

    function checkDateStatus(inputDate) {
        // Convert the input string to a Date object
        const dateToCheck = new Date(inputDate);

        // Get the current date
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for comparison

        // Get the yesterday's date
        const yesterdayDate = new Date();
        yesterdayDate.setDate(currentDate.getDate() - 1);
        yesterdayDate.setHours(0, 0, 0, 0);

        // Compare the input date with today and yesterday
        if (dateToCheck.toDateString() === currentDate.toDateString()) {
            return 'Today';
        } else if (dateToCheck.toDateString() === yesterdayDate.toDateString()) {
            return 'Yesterday';
        } else {
            return inputDate;
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateVerticalScale(20) }}>
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
                    }}>Notification</Text>

                </View>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="transit-connection-variant" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={NOTIFICATIONS.AllNotifications}
                contentContainerStyle={{ gap: scale(20) }}
                keyExtractor={Item => Item.date}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ gap: scale(20) }}>
                            <Text style={{ fontWeight: 'bold', color: ThemeConstant.FADED_BLACK }}>{checkDateStatus(item.date)}</Text>
                            <View style={{ gap: scale(10) }}>
                                {
                                    item.notifications.map((item) => {
                                        return (
                                            <View style={{ gap: scale(10) }} key={item.id}>
                                                <NotificationItem notification={item} />
                                                <Line />
                                            </View>
                                        )

                                    })
                                }
                            </View>
                        </View>
                    )
                }}

            />


        </SafeAreaView >
    )
}

export default Notification;

const NotificationItem = ({ notification }) => {
    return (
        <View style={{ gap: scale(10) }}>
            <Text numberOfLines={2}>{notification?.message} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, accusantium.</Text>
            <Text style={{ alignSelf: 'flex-end', color: ThemeConstant.FADED_BLACK, fontSize: scale(10) }}>{notification?.time}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: ThemeConstant.PADDING_MAIN,
        paddingTop: moderateVerticalScale(30),
        backgroundColor: '#fff'
    }
})