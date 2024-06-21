import React from 'react';
import {View,TextInput,TouchableOpacity,StyleSheet,Image,Text} from 'react-native';
const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={{ height: 15 }} />

        <Text style={styles.title}>Create Account</Text>
        <Image
          source={require('../assets/signup.png')} // Make sure the image is uploaded to assets
          style={styles.image}
        />
        <Image
          source={require('../assets/topwave.png')}
          style={[styles.wave, styles.waveTop]}
        />
         <Text style={styles.credential}>Welcome! Please register to login</Text>
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
      
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.link}>Already have an account?</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/wave.png')}
          style={[styles.wave, styles.waveBottom]}
        />
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
    alignItems: 'justify',
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
    paddingBottom: 50,
    marginBottom: 30,
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
    height: 200,
    marginBottom: 2,
    paddingBottom: 2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 0,
    fontFamily: '',
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

export default SignupScreen;
