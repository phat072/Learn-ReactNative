import { View, Text, StyleSheet } from "react-native"

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Social Media Feed</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF', 
	marginBottom: 10,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF', 
    fontWeight: 'bold',
  },
})

export default Header
