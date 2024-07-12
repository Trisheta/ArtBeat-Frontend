import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BlankScreen from './navigation/BlankScreen';
import WelcomeScreen from './navigation/WelcomeScreen';
import BlankScreen1 from './navigation/BlankScreen1';
import LoginScreen from './navigation/LoginScreen';
import LoadingScreen from './navigation/LoadingScreen';
import WelcomeBackScreen from './navigation/WelcomeBackScreen';
import OpeningScreen from './navigation/OpeningScreen';
import PasswordResetScreen from './navigation/PasswordResetScreen';
import InputScreen from './navigation/Inputscreen'; // Ensure InputScreen is imported correctly
import PasswordReset from './navigation/PasswordReset';
import PasswordConfirmationScreen from './navigation/PasswordConfirmationScreen';
import PasswordSuccessScreen from './navigation/PasswordSuccessScreen'; // Import PasswordSuccessScreen
import WelcomeScreenSignup from './navigation/WelcomeScreenSignup'; // Import WelcomeScreenSignup
import PersonalInfoScreen from './navigation/PersonalInfoScreen'; // Import PersonalInfoScreen
import InputScreen1 from './navigation/InputScreen1'; // Import InputScreen1
import ProfileSetupScreen from './navigation/ProfileSetupScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Opening"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Opening" component={OpeningScreen} />
        <Stack.Screen name="Blank" component={BlankScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Blank1" component={BlankScreen1} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="WelcomeBack" component={WelcomeBackScreen} />
        <Stack.Screen name="PasswordReset" component={PasswordResetScreen} />
        <Stack.Screen name="Password" component={PasswordReset} />
        <Stack.Screen name="PasswordConfirmationScreen" component={PasswordConfirmationScreen} />
        <Stack.Screen name="PasswordSuccessScreen" component={PasswordSuccessScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="WelcomeScreenSignup" component={WelcomeScreenSignup} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} />
        <Stack.Screen name="Input1" component={InputScreen1} />
        <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

