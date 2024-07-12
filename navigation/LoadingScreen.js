import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoadingScreen() {
  return (
    <LinearGradient
      colors={['rgba(188,227,245,1)', 'rgba(220,204,246,1)']}
      style={styles.container}
    >
      <Text style={styles.text}>Give us a moment as we gather your gallery...</Text>
      <ActivityIndicator size="large" color="#07415a" style={styles.indicator} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 30,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Satoshi=Regular'
  },
  indicator: {
    marginTop: 20,
  },
});