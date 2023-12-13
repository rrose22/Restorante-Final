import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Rating = ({ rating, size = 20, color = 'gold' }) => {
  const roundedRating = Math.round(rating);
  return (
    <View style={{ flexDirection: 'row' }}>
      {[...Array(5)].map((_, index) => (
        <Icon
          key={index}
          name={index < roundedRating ? 'star' : 'star-outline'}
          size={size}
          color={color}
        />
      ))}
      <Text style={{ marginLeft: 5 }}>{rating}</Text>
    </View>
  );
};

export default Rating;