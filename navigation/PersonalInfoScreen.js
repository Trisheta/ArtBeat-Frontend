// PersonalInfoScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CountryPicker from 'react-native-country-picker-modal';
import { useNavigation } from '@react-navigation/native';
import InputScreen1 from './InputScreen1'; // Import InputScreen1

const imageSource = require('../assets/createaccountimage.png');

const customFonts = {
  'santoshi-regular': require('../assets/fonts/Satoshi-Regular.otf'),
};

const PersonalInfoScreen = () => {
  const navigation = useNavigation();

  const [inputFocus, setInputFocus] = useState(null);
  const [country, setCountry] = useState({ cca2: 'US', callingCode: ['1'] });
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reEmail, setReEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleNextPress = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailFormatError(true);
      return;
    }
    if (email !== reEmail) {
      setEmailError(true);
    } else {
      setEmailError(false);
      setEmailFormatError(false);
      setModalVisible(true);
    }
  };

  const handleConfirm = () => {
    setModalVisible(false);
    setThankYouVisible(true);
    setTimeout(() => {
      setThankYouVisible(false);
      navigation.navigate('Input1'); // Navigate to InputScreen1 after confirming
    }, 2000); // Adjust timeout delay as needed
  };

  const handleEdit = () => {
    setModalVisible(false);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleReEmailChange = (text) => {
    setReEmail(text);
  };

  const handlePhoneChange = (text) => {
    const sanitizedText = text.replace(/[^0-9]/g, '');
    setPhone(sanitizedText);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <LinearGradient colors={['#bce3f5', '#dcccf6']} style={styles.container}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.text}>Welcome to ArtBeat!</Text>
          <View style={styles.pagination}>
            <View style={styles.dot} />
            <View style={styles.dotInactive} />
            <View style={styles.dotInactive} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={inputFocus === 'firstName' ? styles.inputFocus : styles.input}
              placeholder="Enter here"
              placeholderTextColor={inputFocus === 'firstName' ? '#000' : '#aaa'}
              onFocus={() => setInputFocus('firstName')}
              onBlur={() => setInputFocus(null)}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={inputFocus === 'lastName' ? styles.inputFocus : styles.input}
              placeholder="Enter here"
              placeholderTextColor={inputFocus === 'lastName' ? '#000' : '#aaa'}
              onFocus={() => setInputFocus('lastName')}
              onBlur={() => setInputFocus(null)}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={inputFocus === 'email' ? styles.inputFocus : styles.input}
              placeholder="Enter here"
              placeholderTextColor={inputFocus === 'email' ? '#000' : '#aaa'}
              onFocus={() => setInputFocus('email')}
              onBlur={() => setInputFocus(null)}
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailFormatError && (
              <Text style={styles.errorText}>Please enter a valid email address</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Re-enter your email</Text>
            <TextInput
              style={[
                inputFocus === 'reEmail' ? styles.inputFocus : styles.input,
                emailError ? styles.inputError : null
              ]}
              placeholder="Enter here"
              placeholderTextColor={inputFocus === 'reEmail' ? '#000' : '#aaa'}
              onFocus={() => setInputFocus('reEmail')}
              onBlur={() => setInputFocus(null)}
              value={reEmail}
              onChangeText={handleReEmailChange}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailError && (
              <Text style={styles.errorText}>Your emails do not match</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.phoneInputContainer}>
              <CountryPicker
                countryCode={country.cca2}
                withFilter
                withFlag
                withCallingCode
                onSelect={country => setCountry({ cca2: country.cca2, callingCode: country.callingCode })}
              />
              <Text style={styles.callingCode}>+{country.callingCode}</Text>
              <TextInput
                style={inputFocus === 'phone' ? styles.phoneInputFocus : styles.phoneInput}
                placeholder="xxx-xxx-xxxx"
                placeholderTextColor={inputFocus === 'phone' ? '#000' : '#aaa'}
                onFocus={() => setInputFocus('phone')}
                onBlur={() => setInputFocus(null)}
                value={phone}
                onChangeText={handlePhoneChange}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleNextPress}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </LinearGradient>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.questionText}>Is all the information you inputted correct?</Text>
                <View style={styles.buttonsContainer}>
                  <TouchableOpacity style={styles.noButton} onPress={handleEdit}>
                    <Text style={styles.noButtonText}>No</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.yesButton} onPress={handleConfirm}>
                    <Text style={styles.yesButtonText}>Yes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <Modal
          animationType="fade"
          transparent={true}
          visible={thankYouVisible}
          onRequestClose={() => {
            setThankYouVisible(!thankYouVisible);
          }}
        >
          <View style={styles.thankYouOverlay}>
            <Text style={styles.thankYouText}>Thank you!</Text>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'santoshi-regular',
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
    marginBottom: 10,
    fontFamily: 'santoshi-regular',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    marginHorizontal: 5,
  },
  dotInactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#aaa',
    marginHorizontal: 5,
  },
  inputContainer: {
    width: width * 0.8,
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
    fontFamily: 'santoshi-regular',
  },
  input: {
    height: 33,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    fontFamily: 'santoshi-regular',
  },
  inputFocus: {
    height: 33,
    borderWidth: 1,
    borderColor: '#422c65',
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#8e4242',
  },
  errorText: {
    color: '#8e4242',
    marginTop: 5,
    fontFamily: 'santoshi-regular',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    paddingHorizontal: 7,
    backgroundColor: '#fff',
    fontFamily: 'santoshi-regular',
  },
  callingCode: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'santoshi-regular',
  },
  phoneInput: {
    flex: 1,
    height: 33,
    marginLeft: 10,
    fontFamily: 'santoshi-regular',
  },
  phoneInputFocus: {
    flex: 1,
    height: 33,
    marginLeft: 10,
    borderColor: '#000',
  },
  button: {
    width: width * 0.8,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#422c65',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'santoshi-regular',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(188, 227, 245, 0.8)',
  },
  modalContent: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
  },
  questionText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 400,
    fontFamily: 'santoshi-regular',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  noButton: {
    width: width * 0.8,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#422c65',
    borderWidth: 1,
    marginBottom: 10,
  },
  noButtonText: {
    color: '#422c65',
    fontSize: 18,
    fontFamily: 'santoshi-regular',
  },
  yesButton: {
    width: width * 0.8,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#422c65',
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesButtonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'santoshi-regular',
  },
  thankYouOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(188, 227, 245, 0.8)',
  },
  thankYouText: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'santoshi-regular',
  },
});

export default PersonalInfoScreen;

