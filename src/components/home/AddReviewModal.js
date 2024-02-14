// DrawerModal.js
import React, { useState } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text, TextInput, Keyboard } from 'react-native';
import { moderateVerticalScale, scale } from 'react-native-size-matters';
import { Entypo } from '@expo/vector-icons';
import ThemeConstant from '../../constants/ThemeConstant';
import CustomButton from '../CustomButton';
import StarRating from './StartRating';
import ImagePickerComp from './ImagePickerComp';

const AddReviewModal = ({ isVisible, setIsVisible }) => {
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(null);
    const [image, setImage] = useState('')

    const _handleReviewSubmit = () => {
        console.log('message', message);
        console.log('rating', rating);
        console.log('image', image);
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => setIsVisible(false)}
        >
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.drawerContent} onPress={Keyboard.dismiss} activeOpacity={1}>


                    {/* TOP */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{ gap: scale(10) }}>
                            <Text style={{ fontWeight: '700', fontSize: scale(16) }}>Add Review</Text>
                            <Text style={{ fontWeight: '400', fontSize: scale(12) }}>Please let us know your thoughts. </Text>
                        </View>
                        <TouchableOpacity onPress={() => setIsVisible(false)} >
                            <Entypo name="cross" size={26} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* STARS */}
                    <View>
                        <StarRating rating={rating} setRating={setRating} />
                    </View>

                    {/* FEEDBACK */}
                    <View style={{
                        borderWidth: 1,
                        borderColor: ThemeConstant.FADED_BLACK,
                        height: moderateVerticalScale(120),
                        padding: scale(10),
                        borderRadius: scale(5)
                    }}>
                        <TextInput

                            value={message}
                            onChangeText={txt => {
                                if (txt.length <= 200) {
                                    setMessage(txt);
                                }
                            }}
                            multiline
                            numberOfLines={100}
                            placeholder='Write feedback'
                            maxLength={200}
                            style={{
                                flex: 1,
                                textAlignVertical: 'top'
                            }}
                        />
                    </View>


                    {/* UPLOAD IMAGE */}
                    <ImagePickerComp image={image} setImage={setImage} />



                    <CustomButton title={"Submit"} onPress={_handleReviewSubmit} />




                </TouchableOpacity>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    drawerContent: {
        width: '85%',
        backgroundColor: 'white',
        gap: scale(20),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
        borderRadius: scale(10),
        padding: ThemeConstant.PADDING_MAIN
    },
});

export default AddReviewModal;
