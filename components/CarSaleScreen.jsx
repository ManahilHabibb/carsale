import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CarSaleScreen = ({ navigation }) => {
  useEffect(() => {
    // Set a timeout to navigate to the next screen after 4 seconds
    const timer = setTimeout(() => {
      navigation.replace('LuxuryCarScreen'); // Replaces the screen (no back action)
    }, 4000); // 4000 ms = 4 seconds

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
       <Image source={require('../assets/logocar.jpeg')} 
       
        style={styles.image}
        resizeMode="contain" // Ensure the image maintains its aspect ratio
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',  // Black background as per design
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,  // Adjust width as needed
    height: 400,  // Adjust height as needed
  },
});

export default CarSaleScreen;