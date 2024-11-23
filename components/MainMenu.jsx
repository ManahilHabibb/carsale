import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Arrow */}
      <View style={styles.headerContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} // Added back navigation functionality
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>Drive Your Dreams with Ease</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* First Box */}
        <View style={[styles.box, styles.boxSpacing]}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.8efdf000bae8f441057cb2946bfd219e?rik=OGAYD78NDaPdXg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-RNvHJfOcd28%2fTaxihRExNWI%2fAAAAAAAAADI%2ffNxFFWExJo8%2fs1600%2fland_rover_lrx_concept_003.jpg&ehk=NtMytnPwvubG4DLHQi%2fHtZYhXx4qnL5KMv%2bJqv3tQug%3d&risl=&pid=ImgRaw&r=0',
            }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BookCarScreen')}
          >
            <Text style={styles.buttonText}>Book Car</Text>
          </TouchableOpacity>
        </View>

        {/* Second Box */}
        <View style={[styles.box, styles.boxSpacing]}>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.kZygU_RbNK2kj9ufo2pinAHaE8?rs=1&pid=ImgDetMain',
            }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ViewBookedCarScreen')}
          >
            <Text style={styles.buttonText}>View Booked Car</Text>
          </TouchableOpacity>
        </View>

        {/* Third Box */}
        <View style={[styles.box, styles.boxSpacing]}>
          <Image
            source={{
              uri: 'https://www.hdcarwallpapers.com/walls/2016_range_rover_evoque_autobiography_4k-HD.jpg',
            }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('UpdateBookedCarScreen')}
          >
            <Text style={styles.buttonText}>Update Booked Car</Text>
          </TouchableOpacity>
        </View>

        {/* Fourth Box */}
        <View style={[styles.box, styles.boxSpacing]}>
          <Image
            source={{
              uri: 'https://media.drivingelectric.com/image/private/s--UEsNWPpb--/v1603894252/drivingelectric/2020-10/rr_ev_phev_seoul_pearl_silver_driving_211020_004.jpg',
            }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('DeleteBookedCarScreen')}
          >
            <Text style={styles.buttonText}>Delete Booked Car</Text>
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
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerContainer: {
    position: 'relative', // Allows for absolute positioning of child elements
    alignItems: 'center', // Centers the header text horizontally
    marginBottom: 30,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 32, // Bring the arrow slightly down
    zIndex: 1,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    top:29,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  boxSpacing: {
    marginBottom: 40,
  },
  image: {
    width: 100, // Increase width
    height: 100, // Increase height
    resizeMode: 'contain', // Maintain aspect ratio within container
    borderRadius: 22, // Rounded corners
    marginLeft: 20, // Add spacing to the right of the image
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default MainMenu;