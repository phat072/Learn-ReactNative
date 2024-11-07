import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />
      <Text style={[styles.headerText, isDarkMode ? styles.darkText:null]}>React Native App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000', // Màu chữ mặc định khi không bật Dark Mode
  },
  logo: {
    width: 100,
    height: 100,
  },
  darkText: {
    color: '#fff', // Màu chữ khi bật Dark Mode
  },
});

export default Header;