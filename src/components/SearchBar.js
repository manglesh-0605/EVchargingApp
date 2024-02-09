import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SearchBar } from '@rneui/themed';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../constants/ThemeConstant';

const Search = ({ placeholder, value, setValue, onSearch }) => {
    return (
        // <View>
        <SearchBar
            placeholder={placeholder}
            onChangeText={(txt) => setValue(txt)}
            value={value}
            containerStyle={{
                backgroundColor: 'transparent',
                paddingHorizontal: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
            }}
            inputContainerStyle={{
                backgroundColor: '#fff',
                borderRadius: scale(100),
                borderWidth: 1,
                borderBottomWidth: 1,
                shadowOpacity: 0,
            }}
            inputStyle={{
                color: '#000'
            }}
            cursorColor={ThemeConstant.PRIMARY_COLOR}
        />
        // </View>
    )
}

export default Search;

const styles = StyleSheet.create({})