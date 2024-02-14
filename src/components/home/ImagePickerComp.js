import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../../constants/ThemeConstant';

const ImagePickerComp = ({ image, setImage }) => {

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <TouchableOpacity onPress={pickImage}>
            <View style={styles.imagePickerContainer}>
                {image ? (
                    <Image source={{ uri: image }} style={styles.imagePreview} />
                ) : (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: '700', fontSize: scale(12), color: ThemeConstant.PRIMARY_COLOR }}>Click to Upload Images</Text>
                            <Text style={{ fontWeight: '400', fontSize: scale(8), color: ThemeConstant.FADED_BLACK }}>jpg and png only</Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    imagePickerContainer: {
        borderWidth: 1,
        borderColor: '#d4d4d4',
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateVerticalScale(120),
        borderRadius: scale(5)
    },
    imagePreview: {
        width: '100%',
        height: '100%',
    },
});

export default ImagePickerComp;
