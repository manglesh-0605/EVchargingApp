import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import ThemeConstant from '../../constants/ThemeConstant';

const ImagePickerComp = () => {
    const [imageUri, setImageUri] = useState(null);

    const handleImagePicker = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('Image picker cancelled');
            } else if (response.error) {
                console.error('Image picker error:', response.error);
            } else {
                setImageUri(response.uri);
            }
        });
    };

    return (
        <TouchableOpacity onPress={handleImagePicker}>
            <View style={styles.imagePickerContainer}>
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.imagePreview} />
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
        height: moderateVerticalScale(80),
        borderRadius: scale(5)
    },
    imagePreview: {
        width: '100%',
        height: '100%',
    },
});

export default ImagePickerComp;
