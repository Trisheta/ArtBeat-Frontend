
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function PasswordConfirmationScreen({ navigation }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'),
        'Satoshi-BlackItalic': require('../assets/fonts/Satoshi-LightItalic.otf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or render a loading indicator while fonts are loading
  }

  return (
    <LinearGradient
      colors={['rgba(188,227,245,1)', 'rgba(220,204,246,1)']}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require('../assets/back-icon.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.overlay}>
        <Text style={[styles.title, { fontFamily: 'Satoshi-Regular' }]}>Are you sure with the updated password?</Text>
        <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.yesButton} onPress={() => navigation.navigate('PasswordSuccessScreen')}>
            <Text style={[styles.yesButtonText, { fontFamily: 'Satoshi-BlackItalic' }]}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.noButton} onPress={() => navigation.goBack()}>
            <Text style={[styles.noButtonText, { fontFamily: 'Satoshi-BlackItalic' }]}>No</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  yesButton: {
    backgroundColor: '#3C007A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    marginBottom: 10,
    width: 300,
    alignItems: 'center',
  },
  noButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
    width: 300,
    alignItems: 'center',
  },
  yesButtonText: {
    fontSize: 16,
    color: 'white',
  },
  noButtonText: {
    fontSize: 16,
    color: '#3C007A',
  },
});

