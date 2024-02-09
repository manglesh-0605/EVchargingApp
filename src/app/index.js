import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'


const Page = () => {

    useEffect(() => {
        setTimeout(() => {
            router.replace('/(tabs)')
        }, 0)
    }, [])
    return (
        <>
        </>
    )
}

export default Page

const styles = StyleSheet.create({})