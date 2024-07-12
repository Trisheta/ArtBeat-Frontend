import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const imageSource = require('../assets/createaccountimage.png');

const customFonts = {
  'santoshi-regular': require('../assets/fonts/Satoshi-Regular.otf'),
};

const WelcomeScreenSignup = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('PersonalInfo')}>
      <LinearGradient
        colors={['#bce3f5', '#dcccf6']}
        style={styles.container}
      >
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.text}>Welcome to ArtBeat!</Text>
          <Image source={imageSource} style={styles.image} />
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20, 
    fontFamily:'santoshi-regular'
  },
});

export default WelcomeScreenSignup;
