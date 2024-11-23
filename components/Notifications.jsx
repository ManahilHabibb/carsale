import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notifications = [
   { id: "1", date: "Nov 5", time: "1:00 AM", text: "A new model car added to our company.", icon: "heart" },
  { id: "2", date: "Nov 8", time: "6:00 AM", text: "A promo offer is running for BMW series.", icon: "notifications" },
  { id: "3", date: "Nov 10", time: "8:00 AM", text: "You will get 30% discount of Tesla model X.", icon: "location" },
  { id: "4", date: "Nov 12", time: "8:00 AM", text: "A new model car added to our company.", icon: "heart" },
  { id: "5", date: "Nov 15", time: "9:00 AM", text: "A promo offer is running for BMW series.", icon: "notifications" },
  { id: "6", date: "Nov 17", time: "9:00 AM", text: "You will get 30% discount of Tesla model X.", icon: "location" },
  { id: "7", date: "Nov 17", time: "9:00 AM", text: "A promo offer is running for civic series.", icon: "notifications" },
  { id: "8", date: "Nov 18", time: "9:00 AM", text: "A promo offer is running for civic series.", icon: "notifications" },
  { id: "9", date: "Nov 19", time: "9:00 AM", text: "A promo offer is running for civic series.", icon: "notifications" },
  { id: "10", date: "Nov 20", time: "8:00 AM", text: "A new model car added to our company near you area.", icon: "heart" },
  { id: "11", date: "Nov 23", time: "8:00 AM", text: "You will get 25% discount of civic model X.", icon: "location" },
  { id: "12", date: "Nov 26", time: "9:00 AM", text: "A promo offer is running for civic series.", icon: "notifications" },
];

const Notifications = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={24} color="#fff" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.date}>{item.date} - {item.time}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingHorizontal: 16,
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 16,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#002366",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default Notifications;