import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const LuxuryCarScreen = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../assets/pre.jpeg')} 
    // Replace with the actual path to your image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Premium cars.{"\n"}Enjoy the luxury</Text>
          <Text style={styles.subtitle}>
            Premium and prestige car daily rental.{"\n"}Experience the thrill at a lower price
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}  // Navigate to Login on button press
        >
          <Text style={styles.buttonText}>Let's Go</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Dark overlay for better visibility of text
    justifyContent: 'flex-end',  // Push content to the bottom
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 50,  // Space at the bottom
  },
  textContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    color: '#BBBBBB',
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 60,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default LuxuryCarScreen;