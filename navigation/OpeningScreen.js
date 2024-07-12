// OpeningScreen.js

import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const OpeningScreen = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  const fadeAnimLogo = useRef(new Animated.Value(0)).current;
  const fadeAnimTagline = useRef(new Animated.Value(0)).current;
  const fadeAnimLoginButton = useRef(new Animated.Value(0)).current;
  const fadeAnimSocialButtons = useRef(new Animated.Value(0)).current;
  const fadeAnimSignupText = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animationSequence = Animated.sequence([
      Animated.timing(fadeAnimLogo, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(700),
      Animated.timing(fadeAnimTagline, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(300),
      Animated.timing(fadeAnimLoginButton, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(fadeAnimSocialButtons, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(fadeAnimSignupText, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);

    animationSequence.start();
  }, [
    fadeAnimLogo,
    fadeAnimTagline,
    fadeAnimLoginButton,
    fadeAnimSocialButtons,
    fadeAnimSignupText
  ]);

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Blank');
  };

  const handleSignupPress = () => {
    navigation.navigate('WelcomeScreenSignup');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Animated.View style={{ opacity: fadeAnimLogo }}>
          <Image source={require('../assets/ABLOGO.png')} style={styles.logo} />
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnimTagline, marginTop: 20 }}>
          <Text style={styles.taglineText}>Empower Creatives All Around Us</Text>
        </Animated.View>
      </View>
      <View style={styles.bottomContent}>
        <Animated.View style={{ opacity: fadeAnimLoginButton }}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
            <LinearGradient
              colors={['rgba(188,227,245,1)', 'rgba(220,204,246,1)']}
              style={[styles.gradient, { borderWidth: 1, borderColor: 'black' }]}
            >
              <Text style={styles.loginButtonText}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnimSocialButtons, marginTop: 20 }}>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/apple.png')} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../assets/Gmail.png')} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View style={{ opacity: fadeAnimSignupText, marginTop: 20 }}>
          <Text style={styles.signupText}>
            Don't have an account?{' '}
            <Text style={[styles.signupLink, { color: 'black', fontWeight: 'normal' }]} onPress={handleSignupPress}>
              Signup
            </Text>
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 900, // Adjust the width according to your image size
    height: 180, // Adjust the height according to your image size
    resizeMode: 'contain',
  },
  taglineText: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Satoshi-Regular',
  },
  bottomContent: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 50,
  },
  loginButton: {
    width: 270, // Set the width to 270
    height: 51, // Set the height to 51
    borderRadius: 5,
  },
  gradient: {
    flex: 1, // Ensure the gradient covers the full login button
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Satoshi-Regular', // Use regular font weight
  },
  socialButtons: {
    flexDirection: 'row',
  },
  socialButton: {
    width: 125,
    height: 40,
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 24, // Adjust the width according to your icon size
    height: 24, // Adjust the height according to your icon size
    resizeMode: 'contain',
  },
  signupText: {
    fontSize: 9,
    color: '#555',
    fontFamily: 'Satoshi-BoldItalic',
  },
  signupLink: {
    color: 'black', // Use black color for the link
    textDecorationLine: 'none',
  },
});

export default OpeningScreen;
