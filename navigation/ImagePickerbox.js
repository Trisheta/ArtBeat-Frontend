import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Dimensions, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window');

const customFonts = {
  'santoshi-regular': require('../assets/fonts/Satoshi-Regular.otf'),
  'santoshi-bold': require('../assets/fonts/Satoshi-Bold.otf'),
};


export default function ImagePickerBox({ placeholder, onImageSelected }) {
  const [image, setImage] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access media library is required!');
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setModalVisible(false); // Close modal after selecting the image
        onImageSelected(result.assets[0].uri); // Pass the selected image URI to the parent component
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access camera is required!');
      return;
    }

    try {
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        setModalVisible(false); // Close modal after taking the photo
        onImageSelected(result.assets[0].uri); // Pass the taken image URI to the parent component
      }
    } catch (error) {
      console.log('Error taking photo:', error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.imagePicker}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Image source={placeholder} style={styles.image} />
        )}
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>How would you like to upload your profile?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.buttonCamera]} onPress={takePhoto}>
                <Text style={[styles.buttonText, styles.buttonTextCamera]}>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonCameraRoll]} onPress={pickImage}>
                <Text style={[styles.buttonText, styles.buttonTextCameraRoll]}>Camera Roll</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    width: 150,
    height: 150,
    marginBottom: 8,
    alignSelf: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(188, 227, 245, 0.8)',
  },
  modalContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  modalTitle: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 400,
    fontFamily: 'santoshi-bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: width * 0.8,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#422c65',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonCamera: {
    backgroundColor: '#fff',
    borderColor: '#422c65',
    borderWidth: 1,
  },
  buttonCameraRoll: {
    backgroundColor: '#422c65',
  },
  buttonText: {
    fontSize: 16,
  },
  buttonTextCamera: {
    color: '#422c65',
    fontFamily: 'santoshi-regular',
  },
  buttonTextCameraRoll: {
    color: '#fff',
    fontFamily: 'santoshi-regular',
  },
});
