import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QA = ({ feedbacks, isDarkMode }: { feedbacks: string[], isDarkMode: boolean }) => {
  return (
    <View>
      <Text style={[styles.headerText, isDarkMode && styles.darkText]}>Frequently Asked Question</Text>
      {feedbacks.map((feedback, index) => (
        <View key={index} style={styles.feedbackItem}>
          <Text style={[styles.feedbackText, isDarkMode && styles.darkText]}>Q: {feedback}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feedbackItem: {
    marginBottom: 10,
  },
  feedbackText: {
    fontSize: 16,
    color: '#000', // Màu chữ mặc định khi không bật Dark Mode
  },
  darkText: {
    color: '#fff', // Màu chữ khi bật Dark Mode
  },
});

export default QA;