import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const Option = ({ label, isEnabled, toggleSwitch, isDarkMode }: 
  { label: string, isEnabled: boolean, toggleSwitch: () => void, isDarkMode: boolean }) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={[styles.label, isDarkMode && styles.darkText]}>{label}</Text>
      <Switch value={isEnabled} onValueChange={toggleSwitch} />
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#000', 
  },
  darkText: {
    color: '#fff', 
  },
});

export default Option;