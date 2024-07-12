import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default function PasswordResetScreen({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Santoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'),
        'Santoshi-BlackItalic': require('../assets/fonts/Satoshi-BlackItalic.otf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Render a loading indicator while fonts are loading
  }

  return (
    <LinearGradient
      colors={['rgba(188,227,245,1)', 'rgba(220,204,246,1)']}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/back-icon.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={[styles.title, { fontFamily: 'Santoshi-Regular' }]}>Welcome to password reset</Text>
        <Image source={require('../assets/password-reset.png')} style={styles.image} />
        <Text style={[styles.subtitle, { fontFamily: 'Santoshi-Regular' }]}>
          We will need to verify your account.
        </Text>
        <Text style={[styles.subtitle, { fontFamily: 'Santoshi-Regular' }]}>
          Please proceed to 2-step verification.
        </Text>
      </View>
      <TouchableOpacity style={styles.proceedButton} onPress={() => navigation.navigate('Input')}>
        <Text style={[styles.proceedButtonText, { fontFamily: 'Santoshi-Regular' }]}>Proceed</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 5,
  },
  proceedButton: {
    width: '80%',
    height: 45,
    backgroundColor: '#422c65',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 50,
  },
  proceedButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});
