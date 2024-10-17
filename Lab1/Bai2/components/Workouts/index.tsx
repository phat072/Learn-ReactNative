import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { workouts } from '../../data/index';

// Định nghĩa kiểu cho props
interface WorkoutListProps {
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

// Định nghĩa kiểu cho item
interface WorkoutItem {
  id: string;
  type: string;
}

const Workouts: React.FC<WorkoutListProps> = ({ selectedItems, setSelectedItems }) => {
  const toggleSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  return (
    <FlatList
      data={workouts}
      keyExtractor={(item: WorkoutItem) => item.id}
      renderItem={({ item }: { item: WorkoutItem }) => (
        <View style={styles.item}>
          <Text>{item.type}</Text>
          <TouchableOpacity onPress={() => toggleSelection(item.type)} style={styles.button}>
            <Text style={styles.buttonText}>
              {selectedItems.includes(item.type) ? 'DESELECT' : 'SELECT'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 5,
    backgroundColor: '#6200ee',
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default Workouts;