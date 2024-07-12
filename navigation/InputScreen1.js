import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, SafeAreaView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const InputScreen1 = () => {
  const [code, setCode] = useState('');
  const [sendVia, setSendVia] = useState('Phone');
  const [resentMessage, setResentMessage] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [showCodeError, setShowCodeError] = useState(false);
  const navigation = useNavigation();

  const handleResend = () => {
    setCode('');
    setResentMessage(true);
    setTimeout(() => {
      setResentMessage(false);
    }, 3000);
  };

  const handleVerify = () => {
    if (!/^\d{6}$/.test(code)) {
      setShowCodeError(true);
      return;
    }

    setCode('');
    setModalVisible(true);
    setModalMessage('Verifying verification code, please wait...');
    setTimeout(() => {
      if (code === '123456') {
        setModalMessage('Verification Complete!');
        setTimeout(() => {
          setModalVisible(false);
          navigation.navigate('ProfileSetup');
        }, 2000);
      } else {
        setModalMessage('Incorrect Code');
        setTimeout(() => {
          setModalVisible(false);
        }, 2000);
      }
    }, 2000);
  };

  const handleChangeCode = (text) => {
    setCode(text);
    setShowCodeError(false);
  };

  return (
    <LinearGradient colors={['#bce3f5', '#dcccf6']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.keyboardAvoidingView}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              <View style={styles.header}>
                <View style={styles.dot} />
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
              </View>
              <Text style={styles.title}>Two-step verification</Text>
              <Text style={styles.subtitle}>Enter the two-step verification code we sent to your phone.</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="6-digit code from SMS"
                  keyboardType="numeric"
                  value={code}
                  onChangeText={handleChangeCode}
                />
                {showCodeError && <Text style={styles.errorText}>Please enter a 6-digit numeric code.</Text>}
              </View>
              <Text style={styles.sendCodeViaText}>Send code via:</Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={[styles.button, sendVia === 'Phone' && styles.selectedButton]}
                  onPress={() => setSendVia('Phone')}
                >
                  <Text style={[styles.buttonText, sendVia === 'Phone' && styles.selectedButtonText]}>Phone</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, sendVia === 'Email' && styles.selectedButton]}
                  onPress={() => navigation.navigate('Email')}
                >
                  <Text style={[styles.buttonText, sendVia === 'Email' && styles.selectedButtonText]}>Email</Text>
                </TouchableOpacity>
              </View>
              {resentMessage && <Text style={styles.resentMessage}>We resent you the code!</Text>}
              <TouchableOpacity style={styles.resendButton} onPress={handleResend}>
                <Text style={styles.resendButtonText}>Resend code</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyButtonText}>Verify</Text>
              </TouchableOpacity>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>{modalMessage}</Text>
                  </View>
                </View>
              </Modal>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 70,
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
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginLeft: '8%',
  },
  inputContainer: {
    width: '85%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ECECEC',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 14,
    color: '#8e4242',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  sendCodeViaText: {
    fontSize: 14,
    color: '#000000',
    alignSelf: 'flex-start',
    marginLeft: '8%',
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '87%',
    height: 40,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ECECEC',
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#656565',
  },
  selectedButton: {
    backgroundColor: '#ECECEC',
    borderColor: '#07415A',
  },
  selectedButtonText: {
    color: '#07415A',
  },
  resentMessage: {
    color: '#8e4242',
    marginBottom: 10,
  },
  resendButton: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    borderColor: '#422c65',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  resendButtonText: {
    color: '#422c65',
    fontWeight: 'bold',
  },
  verifyButton: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#422c65',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  verifyButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(188, 227, 245, 0.8)',
  },
  modalContent: {
    width: '100%',
    padding: 40,
    borderRadius: 10,
    marginBottom: '100%',
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});

export default InputScreen1;