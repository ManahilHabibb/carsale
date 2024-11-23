
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCarContext } from '../App';

const ViewBookedCarScreen = ({ navigation }) => {
  const { cars } = useCarContext();
  const [carId, setCarId] = useState('');

  const handleNext = () => {
    const car = cars.find((car) => car.id === carId);
    if (car) {
      navigation.navigate('UpdateBookedCarDetailsScreen', { car });
    } else {
      Alert.alert('Error', 'No car found with the given ID.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.header}>View Booked Car</Text>
      <Image
        source={{ uri: 'https://www.pngall.com/wp-content/uploads/7/Tesla-Electric-Car-PNG-Image-HD.png' }}
        style={styles.image}
      />
      <Text style={styles.carIdHeading}>Car ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Car ID"
        value={carId}
        onChangeText={setCarId}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles remain the same as provided earlier
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 30, // Bring content down slightly to create space
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 40,
    zIndex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    marginTop: 20, // Slightly down from the top
  },
  image: {
    width: '80%',
    height: 200, // Adjust as needed
    resizeMode: 'cover', // Cover the space
    borderRadius: 15,
    marginBottom: 30, // Space between image and input fields
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Shadow for Android
    alignSelf: 'center',
  },
  carIdHeading: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:45, // Center the text horizontally
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    width: '80%', // Make input field slightly smaller and centered
    alignSelf: 'center', // Center the input field horizontally
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '60%', // Adjust width of the button
    alignSelf: 'center', // Center the button horizontally
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ViewBookedCarScreen;
