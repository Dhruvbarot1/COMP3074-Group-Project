import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function AddRestaurant({ navigation, route }) {
  const [id, setId] = useState(Date.now());
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (route.params?.restaurant) {
      const { restaurant } = route.params;
      setId(restaurant.id);
      setName(restaurant.name || '');
      setAddress(restaurant.address || '');
      setPhone(restaurant.phone || '');
      setDescription(restaurant.description || '');
      setTags(restaurant.tags || '');
      setRating(restaurant.rating || 0);
    }
  }, [route.params]);

  const saveRestaurant = () => {
    if (route.params?.restaurant) {
      const updatedRestaurant = {
        id,
        name,
        address,
        phone,
        description,
        tags,
        rating,
      };
      navigation.navigate('RestaurantList', { updatedRestaurant });
    } else {
      const newRestaurant = {
        id: Date.now(),
        name,
        address,
        phone,
        description,
        tags,
        rating,
      };
      navigation.navigate('RestaurantList', { newRestaurant });
    }
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
        <Text style={styles.star}>{index < rating ? '★' : '☆'}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add / Edit Restaurant</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.textArea]}
        multiline
        numberOfLines={4}
      />
      <TextInput
        placeholder="Tags (comma-separated)"
        value={tags}
        onChangeText={setTags}
        style={styles.input}
      />
      <Text style={styles.ratingLabel}>Rating:</Text>
      <View style={styles.starContainer}>{renderStars()}</View>
      <TouchableOpacity style={styles.saveButton} onPress={saveRestaurant}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4CAF50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#4CAF50',
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  star: {
    fontSize: 32,
    marginHorizontal: 5,
    color: 'gold',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
