import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { scale } from 'react-native-size-matters';

const Profileitem = ({ name, onClick }) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Text style={styles.title}>{name}</Text>
            <View>
                <Feather name="arrow-right" size={26} color="black" />
            </View>

        </View>
    )
}

export default Profileitem

const styles = StyleSheet.create({
    title: {
        fontWeight: '600',
        fontSize: scale(16)
    }
})