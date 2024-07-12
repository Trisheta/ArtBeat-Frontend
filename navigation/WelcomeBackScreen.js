import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const WelcomeBackScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'), // Ensure the path is correct
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const fadeAnimWelcome = useRef(new Animated.Value(0)).current;
  const fadeAnimImage = useRef(new Animated.Value(0)).current;
  const fadeAnimGladText = useRef(new Animated.Value(0)).current;
  const fadeWaitText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnimWelcome, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimImage, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnimGladText, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(fadeWaitText, {
        toValue: 1,
        duration: 1000,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnimWelcome, fadeAnimImage, fadeAnimGladText, fadeWaitText]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <LinearGradient
      colors={['rgba(188,227,245,1)', 'rgba(220,204,246,1)']}
      style={styles.container}
    >
      <Animated.Text style={[styles.text, { opacity: fadeAnimWelcome }]}>
        Welcome Back, Nav!
      </Animated.Text>
      <Animated.Image
        source={require('../assets/welcome.png')} // Replace with users' profile from backend 
        style={[styles.image, { opacity: fadeAnimImage }]}
      />
      <Animated.Text style={[styles.text, { opacity: fadeAnimGladText }]}>
        We're glad to see you today
      </Animated.Text>
      <Animated.Text style={[styles.text, { opacity: fadeWaitText, position: 'absolute', bottom: 20 }]}>
        Please wait as we load you in
      </Animated.Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    marginBottom: 20,
    fontFamily: 'Satoshi-Regular',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default WelcomeBackScreen;