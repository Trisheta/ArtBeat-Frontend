import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      Alert.alert('Email Submitted', `Password reset link sent to ${email}`);
    } else {
      Alert.alert('Error', 'Please enter an email address');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/place.jpg')} style={styles.customImage} />
      <Text style={styles.title}>Forgot password?</Text>
      <Text style={styles.subtitle}>Don't worry, it happens. Please enter the email address associated with your account</Text>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/email.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  customImage: {
    width: 300, // Adjust width to enlarge
    height: 250, // Adjust height to enlarge
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    width: '100%',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'left',
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  button: {
    backgroundColor: '#F69191',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#8E3E3E',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
