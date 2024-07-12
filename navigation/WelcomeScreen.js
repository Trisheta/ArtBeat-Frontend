import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient from expo-linear-gradient

export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Blank1'); // Navigate back to Blank screen before Login
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['rgba(188,227,245,1)', 'rgba(220,204,246,1)']}
      style={styles.container}
    >
      <Text style={styles.welcome}>Welcome back!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontFamily:'Satoshi-Regular',
    fontSize: 24,
    color: '#000',
  },
});
