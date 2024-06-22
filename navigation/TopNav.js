import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>ARTBEAT</Text>
      <Image source={require('../assets/dm.png')} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  icon: {
    width: 40,
    height: 40,
    tintColor: '#ff69b4',
  },
});

export default Navbar;

