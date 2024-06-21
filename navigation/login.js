// navigation/login.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ height: 15 }} />
        <Image source={require('../assets/topwave.png')} style={[styles.wave, styles.waveTop]} />

        <Text style={styles.title}>Login</Text>
        <Image source={require('../assets/login.png')} style={styles.image} />
        <Text style={styles.credential}>Welcome back! Please sign in to continue</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/google.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../assets/github.png')} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Github</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>-------------------------or-------------------------</Text>

        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.link}>Don't have an account yet?</Text>
        </TouchableOpacity>

        <Image source={require('../assets/wave.png')} style={[styles.wave, styles.waveBottom]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f65999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
  },
  orText: {
    fontSize: 20,
    color: '#adb0b1',
    marginBottom: 20,
  },
  wave: {
    width: 500,
    height: 300,
    position: 'absolute',
  },
  waveTop: {
    top: 0,
    width: 500,
    height: 200,
  },
  waveBottom: {
    bottom: 0,
    width: 500,
    height: 200,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    paddingTop: 0,
  },
  image: {
    width: 300,
    height: 230,
    marginBottom: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 0,
    color: '#505050',
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#f65999',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30,
    flexDirection: 'row',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#505050',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  credential: {
    color: '#505050',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

export default LoginScreen;
