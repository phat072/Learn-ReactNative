import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import Header from "../components/header"
import Post from "../components/post"
export default function App() {
	return (
		<ScrollView
			style={styles.scrollView}
			showsVerticalScrollIndicator={false}>
			<Header />
			<Post />
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		height: '100%',
		marginTop: 40,
		marginHorizontal: 2,
		backgroundColor: '#F7F7F7',
	},
})