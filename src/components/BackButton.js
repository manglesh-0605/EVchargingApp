import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router'

const BackButton = ({ marginBottom = 0, marginTop = 10 }) => {

    const handleBack = () => {
        router.back();
    }

    return (
        <TouchableOpacity onPress={handleBack} style={{ marginBottom: marginBottom, marginTop: marginTop }}>
            <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default BackButton

const styles = StyleSheet.create({})