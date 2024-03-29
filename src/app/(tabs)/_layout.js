import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { moderateScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../../constants/ThemeConstant';
import Routes from '../../constants/Routes';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIconStyle: {
                width: moderateScale(60)
            }
            
        }}>
            <Tabs.Screen name={Routes.HOEM_TAB} options={{
                headerTitle: 'Home',
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{
                            borderTopColor: focused ? ThemeConstant.PRIMARY_COLOR : 'transparent',
                            borderTopWidth: 2,
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <AntDesign name="home" size={24} color={focused ? ThemeConstant.PRIMARY_COLOR : '#000'} />
                        </View>
                    )
                }
            }} />
            <Tabs.Screen name={Routes.CLASSIFIED_TAB} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{
                            borderTopColor: focused ? ThemeConstant.PRIMARY_COLOR : 'transparent',
                            borderTopWidth: 2,
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Feather name="book-open" size={24} color={focused ? ThemeConstant.PRIMARY_COLOR : '#000'} />
                        </View>
                    )
                }
            }} />
            <Tabs.Screen name={Routes.BOOKMARK} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{
                            borderTopColor: focused ? ThemeConstant.PRIMARY_COLOR : 'transparent',
                            borderTopWidth: 2,
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <FontAwesome name={focused ? "bookmark" : "bookmark-o"} size={24} color={focused ? ThemeConstant.PRIMARY_COLOR : '#000'} />
                        </View>
                    )
                }
            }} />
            <Tabs.Screen name={Routes.PROFILE} options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{
                            borderTopColor: focused ? ThemeConstant.PRIMARY_COLOR : 'transparent',
                            borderTopWidth: 2,
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <AntDesign name="user" size={24} color={focused ? ThemeConstant.PRIMARY_COLOR : '#000'} />
                        </View>
                    )
                }
            }} />
        </Tabs>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})