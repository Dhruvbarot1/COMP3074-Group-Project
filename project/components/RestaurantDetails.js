import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

export default function RestaurantDetails({ route, navigation }) {
  const { restaurant } = route.params;

  const openMap = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurant.address)}`;
    Linking.openURL(url).catch((err) => console.error('Failed to open Google Maps', err));
  };

  const shareViaEmail = () => {
    const subject = `Check out ${restaurant.name}`;
    const body = `Restaurant Details:\n\nName: ${restaurant.name}\nAddress: ${restaurant.address}\nRating: ${restaurant.rating}/5`;
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url).catch((err) => console.error('Failed to open email client', err));
  };

  const editRestaurant = () => {
    navigation.navigate('AddRestaurant', { restaurant });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.info}>Address: {restaurant.address}</Text>
      <Text style={styles.info}>Phone: {restaurant.phone}</Text>
      <Text style={styles.info}>Description: {restaurant.description}</Text>
      <Text style={styles.info}>Tags: {restaurant.tags}</Text>
      <Text style={styles.info}>Rating: {restaurant.rating}/5</Text>
      <Button title="Open in Maps" onPress={openMap} />
      <Button title="Share via Email" onPress={shareViaEmail} />
      <Button title="Edit Restaurant Details" onPress={editRestaurant} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4CAF50',
  },
  info: { fontSize: 16, marginBottom: 10 },
});
