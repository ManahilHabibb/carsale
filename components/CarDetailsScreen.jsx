import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CarDetailsScreen = ({ route, navigation }) => {
  const { car } = route.params; // Get car details from navigation params

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Car Details</Text>
      <Image source={{ uri: car.imageUrl || 'https://www.khaama.com/wp-content/uploads/2022/11/Made-in-Afghanistan-Entop-Car.jpeg' }} style={styles.carImage} />
      <Text style={styles.detailsText}>Car ID: {car.id}</Text>
      <Text style={styles.detailsText}>Car Model: {car.model}</Text>
      <Text style={styles.detailsText}>Year: {car.year}</Text>
      <Text style={styles.detailsText}>Description: {car.description}</Text>

      <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.goBack()}>
        <Text style={styles.arrowText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles remain the same as provided earlier
container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 20, marginTop:20, },
  carImage: { width: 200, height: 120, marginBottom: 30, borderRadius: 8, alignSelf:'center', },
  detailsText: { fontSize: 16, marginBottom: 10 },
  arrowButton: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  arrowText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default CarDetailsScreen;