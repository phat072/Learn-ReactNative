import { View, Text, StyleSheet } from "react-native"

export const CATEGORIES1 = () => {
	return (
		<View style={styles.container}>
			<Text>Categories1</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
	},
})
