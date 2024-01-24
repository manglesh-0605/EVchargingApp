import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Tabs } from 'expo-router'

const UserPage = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
            <Tabs.Screen options={{
                headerTitle: `iddd${id}`
            }} />
            <Text>User page {id}</Text>
        </View>
    )
}

export default UserPage

const styles = StyleSheet.create({})