import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

const cars = [
  {
    id: 1,
    name: "Audi Model Q7",
    price: "$56,000",
    rating: "4.6",
    image: "https://th.bing.com/th/id/R.d8ca7b070e5cf45c252309e8bc045327?rik=kk1MNEZIqAeI8w&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f07%2fCar-High-Quality-PNG.png&ehk=DrpXPAHhuFom5hLWWzYw3Xj42iBvxwksdxKIIovsqTg%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Scion Model TC",
    price: "$40,000",
    rating: "4.8",
    image: "https://th.bing.com/th/id/R.61c0c952b431b396b50e2797e9712039?rik=RW5uMcJi0Z2rsg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCar-PNG-Photos.png&ehk=emMA5t10uspNLJ%2bt4x6Ll5zpkyUB%2fcnWlYK8114xyUc%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 3,
    name: "Audi Model 3",
    price: "$39,000",
    rating: "4.7",
    image: "https://th.bing.com/th/id/R.9052ad8da8f202ddc156c25f34d6fd1c?rik=nlkKLYI8fPWZ%2fg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCar-PNG-Photo.png&ehk=3sUxHFuF6H3gz5sLgPZmnqhw1%2fVjAIi7yecdiiBu69c%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 4,
    name: "Audi Model X",
    price: "$25,000",
    rating: "4.5",
    image: "https://th.bing.com/th/id/R.1d42197b7e9b990920501bce191f88f7?rik=4cKi%2f156T8QNPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcar-png-car-png-file-1766.png&ehk=sx8SFXL7KavUZlPER7RmGVRtgHq4vasX3JEwojUXCgU%3d&risl=&pid=ImgRaw&r=0",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.pexels.com/photos/3568630/pexels-photo-3568630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      }}
      resizeMode="cover"
      style={styles.container}
    >
      <LinearGradient
        colors={["rgba(0, 0, 0, 0.9)", "rgba(0, 0, 0, 0.4)"]}
        style={styles.gradient}
      />
      <View style={styles.overlay}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Ionicons name="menu" size={30} color="#fff" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image
              source={{
                uri: "https://th.bing.com/th/id/R.e940b9e3fb203707c2df8e9e189f64fc",
              }}
              style={styles.logo}
            />
            <Text style={styles.logoText}>Carzo</Text>
          </View>
          <TouchableOpacity
            style={styles.notificationIcon}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Ionicons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBox}
            placeholder="Search Cars"
            placeholderTextColor="#888"
          />
        </View>

        {/* Banner Section */}
        <ImageBackground
          source={{
            uri: "https://cdn.bigboytoyz.com/newcar/files/upload/brandmodel/1603276059163-2021_audi_q2_9_1600x1200.jpg",
          }}
          resizeMode="cover"
          style={styles.banner}
        >
          <TouchableOpacity
            style={styles.bannerButton}
            onPress={() => navigation.navigate("MainMenu")}
          >
            <Text style={styles.bannerButtonText}>Book Now</Text>
          </TouchableOpacity>
        </ImageBackground>

        {/* Popular Cars Section */}
        <LinearGradient
          colors={["#F5F5F5", "#E0E0E0", "#CCCCCC"]}
          style={styles.popularCarsSection}
        >
          <Text style={styles.popularCarsTitle}>Popular Cars</Text>
          <View style={styles.carCardsContainer}>
            {cars.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={styles.carCard}
                onPress={() => navigation.navigate("CarDetails", { carId: item.id })}
              >
                <Image source={{ uri: item.image }} style={styles.carImage} />
                <Text style={styles.carName}>{item.name}</Text>
                <Text style={styles.carRating}>⭐ {item.rating}</Text>
                <Text style={styles.carPrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;


// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200, // Adjust the gradient height here
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Darken the background slightly
    paddingTop: 120, // Move the search bar lower, separate from the header
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // Ensures space between the icons and logo
    alignItems: "center",
    position: "absolute",
    top: 30, // Keep the header fixed in place
    left: 15,
    right: 15,
    zIndex: 10,
  },
  menuIcon: {
    padding: 10, // Add padding to make the touch area larger
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Slight background to make the icon visible
  },
  logoContainer: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center the logo
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 40,
  },
  logoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  notificationIcon: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 40,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginVertical: 15,
    paddingLeft: 20, // Adjust padding for space before the icon
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBox: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 18,
    color: "#333",
  },
  banner: {
    height: 160,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 50,
    marginTop: 10,
  },
  bannerButton: {
    backgroundColor: "black",
    alignSelf: "center",
    marginTop: 90,
    padding: 10,
    borderRadius: 12,
    marginRight: 220,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bannerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  popularCarsSection: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 15, // Reduced padding above the title
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    color: "#696969",
    position:"fix",
  },
  popularCarsTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  carCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  carCard: {
    backgroundColor: "#757475",
    borderRadius: 20,
    width: "48%",
    marginBottom: 15,
    padding: 10,
    elevation: 2,
    alignItems: "center",
  },
  carImage: {
    width: "100%",
    height: 70,
    borderRadius: 10,
    marginBottom: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  carRating: {
    color: "#fff",
  },
  carPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
});