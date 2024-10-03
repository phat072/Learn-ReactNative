import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
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
          <Button
            title={selectedItems.includes(item.type) ? 'DESELECT' : 'SELECT'}
            onPress={() => toggleSelection(item.type)}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9c2ff',
    borderRadius: 5,
  },
});

export default Workouts;