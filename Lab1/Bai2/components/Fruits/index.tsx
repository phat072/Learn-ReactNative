import React from 'react';
import { View, Text, SectionList, Button, Image, StyleSheet } from 'react-native';
import { fruits_vegetables } from '../../data/index';

// Định nghĩa kiểu cho props
interface FruitsVegetablesListProps {
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

// Định nghĩa kiểu cho section
interface SectionItem {
  title: string;
  url: string;
  data: string[];
}

const Fruit: React.FC<FruitsVegetablesListProps> = ({ selectedItems, setSelectedItems }) => {
  const toggleSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <SectionList
      sections={fruits_vegetables}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }: { item: string }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
          <Button
            title={selectedItems.includes(item) ? 'DESELECT' : 'SELECT'}
            onPress={() => toggleSelection(item)}
          />
        </View>
      )}
      renderSectionHeader={({ section: { title, url } }: { section: SectionItem }) => (
        <View style={styles.header}>
          <Image source={{ uri: url }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6e3b6e',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default Fruit;