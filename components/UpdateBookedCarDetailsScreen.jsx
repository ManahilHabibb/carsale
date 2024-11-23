import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCarContext } from '../App'; // Import CarContext

const UpdateBookedCarDetailsScreen = ({ route, navigation }) => {
  const { carId } = route.params;
  const { cars, updateCar } = useCarContext(); // Get cars and updateCar function from context

  const car = cars.find((car) => car.id === carId); // Find the car based on the passed ID

  const [carModel, setCarModel] = useState(car?.model || '');
  const [carYear, setCarYear] = useState(car?.year || '');
  const [carDescription, setCarDescription] = useState(car?.description || '');

  const handleSave = () => {
    if (carModel && carYear && carDescription) {
      const updatedCar = { id: carId, model: carModel, year: carYear, description: carDescription };

      updateCar(updatedCar); // Update the car in the context
      Alert.alert(
        "Success",
        "Car details updated successfully!",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.goBack();
            },
          },
        ]
      );
    } else {
      Alert.alert("Error", "Please fill out all fields before saving.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.header}>Update Booked Car</Text>

      <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.e940b9e3fb203707c2df8e9e189f64fc?rik=cvTYlJO%2bIsEYog&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2%2fSedan-Car-PNG.png',
        }}
        style={styles.image}
      />

      <Text style={styles.fieldLabel}>Car Model</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Car Model"
        value={carModel}
        onChangeText={setCarModel}
      />

      <Text style={styles.fieldLabel}>Car Year</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Car Year"
        value={carYear}
        onChangeText={setCarYear}
        keyboardType="numeric"
      />

      <Text style={styles.fieldLabel}>Car Description</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Enter Description"
        value={carDescription}
        onChangeText={setCarDescription}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles here...
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
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 30,
    alignSelf: 'center',
  },
  fieldLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 35,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
  },
  descriptionInput: {
    height: 80,
  },
  button: {
    backgroundColor: '#000',
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


export default UpdateBookedCarDetailsScreen;