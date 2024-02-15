import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect, router } from 'expo-router'
import Routes from '../constants/Routes'


const Page = () => {

    return (

        <Redirect href={Routes.ONBOADRIND1} />
    )
}

export default Page

const styles = StyleSheet.create({})