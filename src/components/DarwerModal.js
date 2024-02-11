// DrawerModal.js
import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { SET_DRAWER } from '../store/allactionsTypes';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scale } from 'react-native-size-matters';
import { Entypo } from '@expo/vector-icons';
import ThemeConstant from '../constants/ThemeConstant';
import DrawerMenuItem from './DrawerMenuItem';
import Line from './profile/line';
import { router } from 'expo-router';

const DrawerModal = () => {
    const dispatch = useDispatch();
    const { drawerOpened } = useSelector(state => state.DrawerReducer)

    const navigateToContactUs = () => {
        router.push('/contact_us')
    }

    const navigateToTips = () => {
        router.push('/tipsandtricks')
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={drawerOpened}
            onRequestClose={() => dispatch({ type: SET_DRAWER, payload: false })}
        >
            <View style={styles.modalContainer}>
                <View style={styles.drawerContent}>

                    {/* Your drawer content goes here */}
                    <View style={{
                        backgroundColor: '#F5F5F5',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: scale(10),
                        paddingHorizontal: ThemeConstant.PADDING_MAIN
                    }}>
                        <Text style={{ fontWeight: '700', fontSize: scale(20) }}>Menu</Text>
                        <TouchableOpacity onPress={() => dispatch({ type: SET_DRAWER, payload: false })}>
                            <Entypo name="cross" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        paddingHorizontal: ThemeConstant.PADDING_MAIN,
                        gap: scale(10)
                    }}>
                        <DrawerMenuItem name={'About us'} />
                        <Line />
                        <DrawerMenuItem name={'Tips & Tricks '} onClick={navigateToTips} />
                        <Line />
                        <DrawerMenuItem name={'Advertise with us'} />
                        <Line />
                        <DrawerMenuItem name={'Contact us'} onClick={navigateToContactUs} />
                        <Line />
                        <DrawerMenuItem name={'Settings'} />
                        <Line />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    drawerContent: {
        width: '75%',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: scale(60),
        gap: scale(10)
    },
});

export default DrawerModal;
