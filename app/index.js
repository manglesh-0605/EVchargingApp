import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {

    useEffect(() => {
        setTimeout(() => {
            router.replace('/login')
        }, 0)
    }, [])
    return (
        <>
        </>
    )
}

export default index

const styles = StyleSheet.create({})