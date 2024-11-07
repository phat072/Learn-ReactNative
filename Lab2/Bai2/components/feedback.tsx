import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Feedback = ({ onSendFeedback, isDarkMode }: { onSendFeedback: (feedback: string) => void, isDarkMode: boolean }) => {
  const [feedback, setFeedback] = useState('');

  const handleSend = () => {
    if (feedback.trim()) {
      onSendFeedback(feedback);
      setFeedback(''); // Reset sau khi gửi
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, isDarkMode ? styles.darkTextInput : styles.lightTextInput]}
        placeholder="Enter your feedback"
        placeholderTextColor={isDarkMode ? '#888' : '#ccc'}
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <Button title="SEND FEEDBACK" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 100,
    textAlignVertical: 'top',
  },
  lightTextInput: {
    backgroundColor: '#fff', // Màu nền khi Light Mode
    borderColor: '#ccc',
    color: '#000',           // Màu chữ khi Light Mode
  },
  darkTextInput: {
    backgroundColor: '#444', // Màu nền khi Dark Mode
    borderColor: '#555',
    color: '#fff',           // Màu chữ khi Dark Mode
  },
});

export default Feedback;