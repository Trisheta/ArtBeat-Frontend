import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Font from 'expo-font';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Santoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'),
        'Santoshi-BlackItalic': require('../assets/fonts/Satoshi-BlackItalic.otf'),
        'Santoshi-LightItalic': require('../assets/fonts/Satoshi-LightItalic.otf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  const handleLogin = () => {
    navigation.navigate('Loading');
    setTimeout(() => {
      navigation.navigate('WelcomeBack');
    }, 2000);
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('PasswordReset'); // Navigate to PasswordReset screen
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (!fontsLoaded) {
    return null; // or render a loading indicator while fonts are loading
  }

  return (
    <LinearGradient
      colors={['rgba(188,227,245,1)', 'rgba(220,204,246,1)']}
      style={styles.container}
    >
      <Text style={[styles.welcome, { fontFamily: 'Santoshi-Regular' }]}>
        Please enter your information
      </Text>
      <Image
        source={require('../assets/login.png')}
        style={styles.image}
      />
      
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { fontFamily: 'Santoshi-Regular' }]}>Username</Text>
        <TextInput
          style={[styles.input, { fontFamily: 'Santoshi-LightItalic' }]}
          placeholder="Enter here"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={[styles.label, { fontFamily: 'Santoshi-Regular' }]}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.passwordInput, { fontFamily: 'Santoshi-LightItalic' }]}
            placeholder="Enter here"
            value={password}
            secureTextEntry={!isPasswordVisible}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIconContainer}>
            <Image
              source={require('../assets/eye-icon.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleForgotPasswordPress} style={styles.forgotPasswordContainer}>
        <Text style={[styles.forgotPassword, { fontFamily: 'Santoshi-Regular' }]}>
          Forget your password?{' '}
          <Text style={styles.clickHereText} onPress={handleForgotPasswordPress}>
            Click Here
          </Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={[styles.buttonText, { fontFamily: 'Santoshi-BlackItalic' }]}>Log In</Text>
      </TouchableOpacity>
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
    fontSize: 18,
    marginBottom: 30,
    fontFamily: 'Santoshi-Regular',
  },
  image: {
    width: 150,
    height: 130,
    marginBottom: 30,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Santoshi-Regular',
  },
  input: {
    height: 35,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 7,
    fontFamily: 'Santoshi-Regular',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: 'rgba(0,0,0,0.2)',
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 35,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: 'Santoshi-Regular',
    height: '100%',
  },
  eyeIconContainer: {
    padding: 5,
  },
  eyeIcon: {
    width: 40,
    height: 30,
  },
  forgotPasswordContainer: {
    width: '80%',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  forgotPassword: {
    color: '#000000',
    textAlign: 'left',
    fontFamily: 'Santoshi-Regular',
    fontSize: 12,
  },
  clickHereText: {
    color: 'black',
    fontStyle: 'italic',
    textDecorationLine: 'none',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#422c65',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    color: '#f9f9f9',
    fontSize: 16,
    fontFamily: 'Santoshi-BlackItalic',
  },
});