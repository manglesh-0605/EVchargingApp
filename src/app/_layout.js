import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { store, persistor } from '../store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DrawerModal from '../components/DarwerModal';
import Routes from '../constants/Routes';

const RootLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Provider store={store}>
                <PersistGate loading={false} persistor={persistor}>
                    <DrawerModal />
                    <Stack screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name={Routes.HOME} />
                        <Stack.Screen name={Routes.LOGIN} />
                        <Stack.Screen name={Routes.SIGNUP} />
                        <Stack.Screen name={Routes.OTP} />
                        <Stack.Screen name={Routes.FORGOT_PASSWORD} />
                        <Stack.Screen name={Routes.RESET_PASSWORD} />
                        <Stack.Screen name={Routes.CONTACT_US} />
                        <Stack.Screen name={Routes.TIPS_TRICKS} />
                        <Stack.Screen name={Routes.TIPS_TRICKS_DETAIL} />
                        <Stack.Screen name={Routes.NOTIFICATION} />

                        <Stack.Screen name={Routes.TABS} options={{
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