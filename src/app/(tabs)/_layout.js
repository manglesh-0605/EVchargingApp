import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle: {
                
            },
            
        }}>
            <Tabs.Screen name='index' options={{
                headerTitle: 'Home'
            }} />
            <Tabs.Screen name='classifieds' options={{

            }} />
            <Tabs.Screen name='bookmark' options={{

            }} />
            <Tabs.Screen name='profile' options={{

            }} />
        </Tabs>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})