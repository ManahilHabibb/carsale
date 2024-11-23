import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Import Screens
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import HomeScreen from './components/HomeScreen';
import MainMenu from './components/MainMenu';
import BookCarScreen from './components/BookCarScreen';
import ViewBookedCarScreen from './components/ViewBookedCarScreen';
import UpdateBookedCarScreen from './components/UpdateBookedCarScreen';
import DeleteBookedCarScreen from './components/DeleteBookedCarScreen';
import UpdateBookedCarDetailsScreen from './components/UpdateBookedCarDetailsScreen';
import Notifications from './components/Notifications';
import LuxuryCarScreen from './components/LuxuryCarScreen';
import CarSaleScreen from './components/CarSaleScreen';

// Create CarContext for state management
const CarContext = createContext();

export const useCarContext = () => useContext(CarContext);

// Provider for car-related state
const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  const addCar = (car) => {
    const newCar = { id: Date.now().toString(), ...car };
    setCars((prevCars) => [...prevCars, newCar]);
  };

  const deleteCar = (carId) => {
    setCars((prevCars) => prevCars.filter((car) => car.id !== carId));
  };

  return (
    <CarContext.Provider value={{ cars, addCar, deleteCar }}>
      {children}
    </CarContext.Provider>
  );
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer Navigator for app navigation
const DrawerNavigator = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="MainMenu" component={MainMenu} />
    <Drawer.Screen name="BookCar" component={BookCarScreen} />
    <Drawer.Screen name="ViewBookedCar" component={ViewBookedCarScreen} />
    <Drawer.Screen name="UpdateBookedCar" component={UpdateBookedCarScreen} />
    <Drawer.Screen name="DeleteBookedCar" component={DeleteBookedCarScreen} />
    <Drawer.Screen name="UpdateBookedCarDetails" component={UpdateBookedCarDetailsScreen} />
    <Drawer.Screen name="LuxuryCar" component={LuxuryCarScreen} />
    <Drawer.Screen name="CarSale" component={CarSaleScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <CarProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Home" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </CarProvider>
  );
}