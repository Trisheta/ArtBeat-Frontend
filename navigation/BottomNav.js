import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SwiperScreen from './SwiperScreen'; // Correct import path
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

// Import your images
import homeIcon from '../assets/home.png';
import chatIcon from '../assets/chat.png';
import userIcon from '../assets/user.png';
import settingsIcon from '../assets/settings.png';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false, // Hide labels for all tabs
          tabBarStyle: { paddingBottom: 5, paddingTop: 5 } // Adjust tab bar height
        }}
      >
        <Tab.Screen
          name="Home"
          component={SwiperScreen}
          options={{
            headerShown: false, // Hide the header for the Home screen
            tabBarIcon: ({ size }) => (
              <Image
                source={homeIcon}
                style={[styles.icon, { width: size + 5, height: size + 5 }]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size }) => (
              <Image
                source={chatIcon}
                style={[styles.icon, { width: size + 5, height: size + 5 }]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ size }) => (
              <Image
                source={userIcon}
                style={[styles.icon, { width: size + 5, height: size + 5 }]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ size }) => (
              <Image
                source={settingsIcon}
                style={[styles.icon, { width: size + 5, height: size + 5 }]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    // If needed, add any additional styles here
  },
});

export default App;



