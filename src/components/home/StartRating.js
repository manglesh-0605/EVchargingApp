import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const StarRating = ({ rating, setRating }) => {

    const handleStarPress = (selectedRating) => {
        setRating(selectedRating);
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const isFilled = i <= rating;
            stars.push(
                <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
                    <AntDesign
                        name={isFilled ? 'star' : 'staro'}
                        size={55}
                        color={isFilled ? 'gold' : 'grey'}
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <View style={{ width: '100%', justifyContent: "center", alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>{renderStars()}</View>
        </View>
    );
};

export default StarRating;
