import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from '../components/header';
import Option from '../components/option';
import Feedback from '../components/feedback';
import QA from '../components/QA';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const [feedbacks, setFeedbacks] = useState<string[]>([]);

  const handleSendFeedback = (feedback: string) => {
    if (!feedback) return;

    if (isNotificationEnabled) {
      Alert.alert('Thank you for your feedback!');
    }

    setFeedbacks([feedback, ...feedbacks]);
  };

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.darkMode]}>
      <ScrollView>
        <Header isDarkMode={isDarkMode} />
        <Option
          label="Dark Mode"
          isEnabled={isDarkMode}
          toggleSwitch={() => setIsDarkMode(!isDarkMode)}
          isDarkMode={isDarkMode}
        />
        <Option
          label="Notifications"
          isEnabled={isNotificationEnabled}
          toggleSwitch={() => setIsNotificationEnabled(!isNotificationEnabled)}
          isDarkMode={isDarkMode}
        />
        <Feedback onSendFeedback={handleSendFeedback} isDarkMode={isDarkMode} />
        <QA feedbacks={feedbacks} isDarkMode={isDarkMode} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  darkMode: {
    backgroundColor: '#333',
  },
});

export default App;