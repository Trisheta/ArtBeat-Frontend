import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Modal, ScrollView, TouchableOpacity, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { LinearGradient } from 'expo-linear-gradient';
import ImagePickerBox from './ImagePickerbox'; // Import the ImagePickerBox component

const customFonts = {
  'santoshi-regular': require('../assets/fonts/Satoshi-Regular.otf'),
};

export default function ProfileSetupScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    Alert.alert('Profile setup complete');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <LinearGradient
      colors={['#bce3f5', '#dcccf6']}
      style={styles.container}>
      <View style={styles.centeredContent}>
        <View style={styles.header}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        <Text style={styles.title}>Set up your profile</Text>
        <ImagePickerBox
          placeholder={require('../assets/placeholderimg.png')}
          onImageSelected={(uri) => setProfileImage(uri)}
        />
        <Text style={styles.uploadText}>Upload a profile picture</Text>
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={
                showPassword
                  ? require('../assets/eye-icon.png')
                  : require('../assets/eye-icon.png')
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.inputLabel}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputWithIcon}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
            <Image
              source={
                showConfirmPassword
                  ? require('../assets/eye-icon.png')
                  : require('../assets/eye-icon.png')
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={termsAccepted}
          onValueChange={setTermsAccepted}
          style={[
            styles.checkbox,
            termsAccepted && styles.checkboxChecked,
          ]}
          color={termsAccepted ? '#800080' : undefined} // Purple color when checked
        />
        <Text style={styles.buttonLabel}>
          I agree to the{' '}
          <Text style={styles.boldLabel} onPress={() => setShowTerms(true)}>
            Terms and Conditions
          </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Next" color='#4B0082' onPress={handleSignUp} />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showTerms}
        onRequestClose={() => setShowTerms(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>ARTBEAT</Text>
              <Text style={styles.modalTitle}>Terms and Conditions</Text>
              <Text style={styles.modalText}>
                1. Introduction
                Welcome to ArtBeat! By accessing or using our app, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
              </Text>
              <Text style={styles.modalText}>
                2. User Accounts
                Registration: To use certain features of ArtBeat, you may be required to create an account. You must provide accurate and complete information during the registration process.
                Security: You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
              </Text>
              <Text style={styles.modalText}>
                3. Prohibited Activities: You agree not to:
                Post or transmit any content that is offensive, harmful, or violates any law or regulation.
                Use the app to harass, abuse, or harm another person.
                Upload viruses or other malicious code.
                Attempt to reverse-engineer, decompile, or disassemble any part of the app.
              </Text>
              <Text style={styles.modalText}>
                4. Content
                User Content: You retain ownership of any content you upload to ArtBeat. By uploading content, you grant us a non-exclusive, royalty-free, worldwide license to use, display, and distribute your content in connection with the app.
                Prohibited Content: You agree not to upload any content that:
                Infringes on any third party's intellectual property rights.
                Is obscene, defamatory, or offensive.
                Contains personal information of others without their consent.
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowTerms(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center content horizontally
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Satoshi-Regular',
  },
  uploadText: {
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 16,
    fontFamily: 'Santoshi-Regular',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 4,
    alignSelf: 'center', // Align labels to the left
    width: 330, // Align the labels with the input boxes
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white', 
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#fff', // White background color
    width: 330, // Set width to 330
  },
  inputWithIcon: {
    flex: 1,
    height: 40,
    color: 'black', // Text color
  },
  input: {
    height: 40,
    borderColor: 'white', // Border color
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#fff', // White background color
    color: 'black', // Text color
    width: 330, // Set width to 330
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center', // Center the checkbox container horizontally
    width: '90%',
  },
  checkbox: {
    marginRight: 8,
    backgroundColor: 'white', // Purple color when checked
    borderColor: 'white',
    alignSelf: 'center',
  },
  checkboxChecked: {
    backgroundColor: 'white', // Purple color when checked
    borderColor: 'white', // Purple color when checked
  },
  buttonLabel: {
    fontSize: 14,
    textAlign: 'center', // Center align the button label
  },
  boldLabel: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '80%',
    marginBottom: 32,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#4B0082',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});


