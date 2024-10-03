import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Workouts from '../components/Workouts/index';
import Fruit from '../components/Fruits/index';

const App: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <Text style ={{fontSize:40, color: 'blue', fontWeight: 'bold'}}>FlatList - WorkOuts</Text>
      <Workouts selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      <Text style ={{fontSize:40, color: 'blue', fontWeight: 'bold'}}>Fruits - Vegetables</Text>
      <Fruit selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      <View style={styles.selectedContainer}>
        <Text>Selected Items:</Text>
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
  selectedContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default App;