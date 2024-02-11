import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const DrawerMenuItem = ({ name, onClick }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onClick}
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