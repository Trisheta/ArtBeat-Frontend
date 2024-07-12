import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const PasswordReset = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const navigation = useNavigation();

  const handleUpdate = () => {
    if (newPassword !== confirmPassword) {
      setError('Your passwords do not match.\nPlease try again!');
    } else {
      setError('');
      // Navigate to the confirmation screen
      navigation.navigate('PasswordConfirmationScreen');
    }
  };

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.otf'),
        'Satoshi-LightItalic': require('../assets/fonts/Satoshi-LightItalic.otf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or a loading spinner
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
        <Text style={styles.title}>Please reset your password</Text>
        <Image source={require('../assets/password-reset.png')} style={styles.image} />
        <View style={styles.inputGroup}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="New Password"
              secureTextEntry={!newPasswordVisible}
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TouchableWithoutFeedback onPress={() => setNewPasswordVisible(!newPasswordVisible)}>
              <View style={styles.eyeIconContainer}>
                <Image
                  source={require('../assets/eye-icon.png')}
                  style={styles.eyeIcon}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              secureTextEntry={!confirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableWithoutFeedback onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
              <View style={styles.eyeIconContainer}>
                <Image
                  source={require('../assets/eye-icon.png')}
                  style={styles.eyeIcon}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        {error ? (
          <View style={styles.errorContainer}>
            <Image source={require('../assets/error-icon.png')} style={styles.errorIcon} />
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : null}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Satoshi-Regular',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 24,
  },
  inputGroup: {
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Satoshi-Regular',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 7,
    width: 300,
    borderColor: 'transparent',
    backgroundColor: 'rgba(255,255,255,0.8)',
    height: 30,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: 'Satoshi-Regular',
    height: '100%',
  },
  eyeIconContainer: {
    padding: 5,
  },
  eyeIcon: {
    width: 40,
    height: 30,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D8B4C1',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#F3F1F5',
    padding: 10,
    marginBottom: 12,
    width: '80%',
  },
  errorIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  error: {
    color: '#B00020',
    fontFamily: 'Satoshi-Regular',
    fontSize: 10,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#3C007A',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    marginBottom: 30,
    width: 300,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PasswordReset;
