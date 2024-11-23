import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCarContext } from '../App'; // Import useCarContext to access car context

const DeleteBookedCarScreen = ({ navigation }) => {
  const [carId, setCarId] = useState('');
  const { cars, deleteCar } = useCarContext(); // Access cars and deleteCar from context

  const handleDelete = () => {
    if (carId) {
      // Find the car by ID
      const carToDelete = cars.find((car) => car.id === carId);

      if (carToDelete) {
        // Car found, proceed with deletion
        Alert.alert(
          "Confirm Deletion",
          `Are you sure you want to delete the car with ID: ${carId}?`,
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Delete",
              style: "destructive",
              onPress: () => {
                // Remove the car from the context
                deleteCar(carId); // Remove the car from the context
                Alert.alert("Success", `Car with ID ${carId} has been deleted.`);
                setCarId(''); // Clear input field
                navigation.goBack(); // Return to the previous screen
              },
            },
          ]
        );
      } else {
        Alert.alert("Error", `No car found with ID: ${carId}`);
      }
    } else {
      Alert.alert("Error", "Please enter a valid Car ID.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.header}>Delete a Booked Car</Text>

      {/* Image */}
      <Image
        source={{
          uri: 'https://www.khaama.com/wp-content/uploads/2022/11/Made-in-Afghanistan-Entop-Car.jpeg',
        }}
        style={styles.image}
      />

      {/* Car ID Input */}
      <Text style={styles.label}>Enter Car ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Car ID"
        value={carId}
        onChangeText={setCarId}
      />

      {/* Delete Button */}
      <TouchableOpacity style={styles.button} onPress={handleDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    marginTop: 20,
  },
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignSelf: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    width: '80%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#d9534f', // Red color for delete action
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DeleteBookedCarScreen;