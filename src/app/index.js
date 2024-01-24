import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const Page = () => {

    useEffect(() => {
        setTimeout(() => {
            router.replace('/onboarding/onboarding1')
        }, 0)
    }, [])
    return (
        <>
        </>
    )
}

export default Page

const styles = StyleSheet.create({})