import React from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ShareIcon from 'react-native-vector-icons/FontAwesome'; 
import Rating from './Rating';
const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  const handleShare = async () => {
    try {
      const shareOptions = {
        message: `Check out this restaurant: ${item.name} at ${item.address}`
      };

      const result = await Share.share(shareOptions);
      if (result.action === Share.sharedAction) {
        // unfinished
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Marker
          coordinate={{
            latitude: 37.7749,
            longitude: -122.4194,
          }}
          title={item.name}
          description={item.address}
        />
      </MapView>
      <Image source={{ uri: 'https://via.placeholder.com/503' }} style={styles.thumbnail} />
      <View style={styles.detailsContainer}>
        <Text>{item.name}</Text>
        <Text>{item.address}</Text>
        <Text>{item.description}</Text>
        <Text>{item.tags}</Text>
        <Rating rating={item.rating} />

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteRestaurant(item.key)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <ShareIcon name="share" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  thumbnail: {
    width: 100,
    height: 65,
    borderRadius: 5,
    margin: 0,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: 200,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  shareButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default DetailsScreen;
