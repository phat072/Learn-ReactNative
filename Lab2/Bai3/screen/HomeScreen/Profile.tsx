import React from "react"
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { AppContext } from "../../context/AppContext"

export const Profile = () => {
	const appContext = React.useContext(AppContext)

	const handleLogOut = () => {
		appContext?.setIsLoggedIn("idle")
	}

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<Text style={styles.title}>Profile Screen</Text>
				<TouchableOpacity onPress={handleLogOut}>
					<Text style={styles.logoutText}>Log Out</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 16,
	},
	title: {
		fontSize: 18,
		marginBottom: 12,
	},
	logoutText: {
		color: "#3B82F6", // Blue-400
		fontSize: 16,
	},
})
