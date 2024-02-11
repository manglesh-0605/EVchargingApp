import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { SET_DRAWER } from '../store/allactionsTypes';

const DrawerMenuItem = ({ name, onClick = function () { } }) => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                onClick();
                setTimeout(() => {
                    dispatch({ type: SET_DRAWER, payload: false });
                }, 0)
            }}
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <Text>{name}</Text>
            <Feather name="arrow-right" size={26} color="black" />
        </TouchableOpacity>
    )
}

export default DrawerMenuItem

const styles = StyleSheet.create({})