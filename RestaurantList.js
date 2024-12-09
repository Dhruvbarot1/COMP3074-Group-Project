import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function RestaurantList({ navigation, route }) {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: 'Pizza Place',
      address: '235 King St',
      phone: '123-456-7890',
      description: 'Best pizza in town!',
      tags: 'Italian, Vegetarian',
      rating: 4,
    },
    {
      id: 2,
      name: 'Thai Spice',
      address: '456 Queen St',
      phone: '987-654-3210',
      description: 'Authentic Thai food.',
      tags: 'Thai, Spicy, Vegan',
      rating: 5,
    },
     {
      id: 3,
      name: 'BBQ Nation',
      address: '85 Milner Avenue',
      phone: '954-623-3579',
      description: 'Best BBQ ever with unforgetable experience',
      tags: 'BBQ, Non-Veg, Spicy',
      rating: 4,
    },

  ]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (route.params?.updatedRestaurant) {
      setRestaurants((prev) =>
        prev.map((restaurant) =>
          restaurant.id === route.params.updatedRestaurant.id
            ? route.params.updatedRestaurant
            : restaurant
        )
      );
    } else if (route.params?.newRestaurant) {
      setRestaurants((prev) => [...prev, route.params.newRestaurant]);
    }
  }, [route.params]);

  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Name or Tags"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('RestaurantDetails', { restaurant: item })
            }
          >
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <View style={styles.rating}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesome
                    key={index}
                    name={index < item.rating ? 'star' : 'star-o'}
                    size={16}
                    color="#FFD700"
                  />
                ))}
              </View>
            </View>
            <Text style={styles.cardSubtitle}>{item.address}</Text>
            <Text style={styles.cardTags}>{item.tags}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddRestaurant')}
      >
        <FontAwesome name="plus" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.aboutButton}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.aboutText}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9fb',
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  cardTags: {
    fontSize: 14,
    color: '#4CAF50',
    fontStyle: 'italic',
  },
  rating: {
    flexDirection: 'row',
  },
  fab: {
    position: 'absolute',
    bottom: 80, 
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  aboutButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  aboutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
