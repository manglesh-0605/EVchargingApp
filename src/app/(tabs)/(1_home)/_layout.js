import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import Routes from '../../../constants/Routes';

const Layout = () => {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name={Routes.HOME_INDEX} />
            <Stack.Screen name={Routes.HOME_STATION_DETAIL} />
        </Stack>
    )
}

export default Layout;

const styles = StyleSheet.create({})