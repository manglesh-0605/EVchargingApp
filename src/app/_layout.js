import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { store, persistor } from '../store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DrawerModal from '../components/DarwerModal';

const RootLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                <PersistGate loading={false} persistor={persistor}>
                    <DrawerModal />
                    <Stack screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name='index' />
                        <Stack.Screen name='login' />
                        <Stack.Screen name='signup' />
                        <Stack.Screen name='otp' />
                        <Stack.Screen name='forgotpassword' />
                        <Stack.Screen name='resetpassword' />
                        <Stack.Screen name='contact_us' />
                        <Stack.Screen name='tipsandtricks' />
                        <Stack.Screen name='tipsandtricksDetails' />

                        <Stack.Screen name='(tabs)' options={{
                            headerShown: false
                        }} />

                    </Stack>

                </PersistGate>
            </Provider>
        </GestureHandlerRootView>

    )
}

export default RootLayout;

const styles = StyleSheet.create({})