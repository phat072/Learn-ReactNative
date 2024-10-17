import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Workouts from '../components/Workouts/index';
import Fruit from '../components/Fruits/index';

const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>FlatList - WorkOuts</Text>
      <ImageBackground
        source={{ uri: 'https://st2.depositphotos.com/9527076/12335/i/950/depositphotos_123359068-stock-photo-fitness-workout-background-dumbbells-on.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        
        <Workouts selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      </ImageBackground>

      <Text style={styles.sectionTitle}>SecondList - Fruits & Vegetables</Text>
      <ImageBackground
        source={{ uri: 'https://thejoyofhealthycooking.blog/wp-content/uploads/2024/01/image.jpeg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Fruit selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      </ImageBackground>

      {/* Selected Items */}
      <View style={styles.selectedContainer}>
        <Text>SELECTED EXERCISES:</Text>
        <Text>{selectedItems.join(', ') || 'None'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    marginVertical: 10,  // Space between sections
    padding: 10,
    borderRadius: 10,  // Optional, adds rounded corners to sections
  },
  sectionTitle: {
    fontSize: 25,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 10,
  },
  selectedContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default App;
