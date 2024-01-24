import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen name='index' options={{
                headerTitle: 'Home'
            }} />
            <Tabs.Screen name='users/[id]' options={{
                headerTitle: 'UserDetail'
            }} />
        </Tabs>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})