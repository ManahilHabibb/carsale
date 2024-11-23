import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCarContext } from '../App'; // Access Firestore functions

const BookCarScreen = ({ navigation }) => {
  const { addCar } = useCarContext();
  const [carId, setCarId] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [description, setDescription] = useState('');

  const handleConfirmBooking = async () => {
    if (carId && carModel && carYear && description) {
      const car = { id: carId, model: carModel, year: carYear, description };
      try {
        await addCar(car);
        Alert.alert('Booking Successful', 'Your car has been booked successfully!', [
          { text: 'OK', onPress: () => navigation.goBack() },
        ]);
        setCarId('');
        setCarModel('');
        setCarYear('');
        setDescription('');
      } catch (error) {
        Alert.alert('Error', 'Failed to book the car.');
      }
    } else {
      Alert.alert('Error', 'Please fill out all required fields.');
    }
  };

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="#000" />
    </TouchableOpacity>

    <Text style={styles.header}>Book a Car</Text>

    <Image
      source={{
        uri: 'https://cdn.bigboytoyz.com/newcar/files/upload/brandmodel/1603276059163-2021_audi_q2_9_1600x1200.jpg',
      }}
      style={styles.image}
    />

    <TextInput
      style={styles.input}
      placeholder="Enter Car ID"
      value={carId}
      onChangeText={setCarId}
    />
    <TextInput
      style={styles.input}
      placeholder="Enter Car Model"
      value={carModel}
      onChangeText={setCarModel}
    />
    <TextInput
      style={styles.input}
      placeholder="Enter Car Year"
      keyboardType="numeric"
      value={carYear}
      onChangeText={setCarYear}
    />
    <TextInput
      style={[styles.input, styles.descriptionInput]}
      placeholder="Enter Description"
      multiline
      value={description}
      onChangeText={setDescription}
    />

    <TouchableOpacity style={styles.button} onPress={handleConfirmBooking}>
      <Text style={styles.buttonText}>Confirm Booking</Text>
    </TouchableOpacity>
  </View>
);
};
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 30,
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
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  descriptionInput: {
    height: 80,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default BookCarScreen;



