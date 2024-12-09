import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to the Personal Restaurant Guide! This app helps you keep track
        of your favorite restaurants, rate them, and share your experiences.
      </Text>
      <Text style={styles.subtitle}>Team Members:</Text>
      <View style={styles.teamContainer}>
        <Text style={styles.member}>Naiya - 101416336</Text>
        <Text style={styles.member}>Dhruv - 101415874</Text>
        <Text style={styles.member}>Krish - 101413517</Text>
        <Text style={styles.member}>Pratham - 101414808</Text>
      </View>
      <Text style={styles.footer}>Thank you for using our app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa', 
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50, 
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4CAF50', 
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 24,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  teamContainer: {
    marginBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  member: {
    fontSize: 18,
    color: '#444',
    marginBottom: 5,
  },
  footer: {
    fontSize: 14,
    color: '#888',
    marginTop: 20,
    textAlign: 'center',
  },
});
