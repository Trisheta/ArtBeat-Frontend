import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopNav from './TopNav'; // Adjust the path based on your file structure
import BottomNav from './BottomNav';

const Home = () => {
  return (
    <View style={styles.container}>
      <TopNav />
      <BottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30, // Adjust the value to create the desired space at the top
  },
});

export default Home;