import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
} from "react-native"

export const SignUpScreen = () => {
	const navigation = useNavigation()
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.iconWrapper}>
					<FontAwesome5 name="react" size={52} color="#61dbfb" />
				</View>
				<View>
					<Text style={styles.headerText}>Create New Account</Text>
				</View>
				<View style={styles.inputContainer}>
					<View style={styles.inputWrapper}>
						<AntDesign name="user" size={24} />
						<TextInput style={styles.input} placeholder="Enter username" />
					</View>
					<View style={styles.inputWrapper}>
						<Feather name="mail" size={24} />
						<TextInput style={styles.input} placeholder="Enter email" />
					</View>
					<View style={styles.inputWrapper}>
						<AntDesign name="lock1" size={24} />
						<TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
					</View>
					<View style={styles.inputWrapper}>
						<AntDesign name="lock1" size={24} />
						<TextInput style={styles.input} placeholder="Confirm password" secureTextEntry />
					</View>
					<TouchableOpacity style={styles.createButton}>
						<Text style={styles.buttonText}>CREATE</Text>
					</TouchableOpacity>
					<View>
						<Text style={styles.footerText}>
							Already have an account?{" "}
							<Text
								onPress={() => navigation.navigate("LogIn")}
								style={styles.linkText}>
								Login now!
							</Text>
						</Text>
					</View>
				</View>
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
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 16,
	},
	iconWrapper: {
		width: 80,
		height: 80,
		backgroundColor: "black",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
		marginBottom: 16,
	},
	headerText: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
	},
	inputContainer: {
		width: "100%",
	},
	inputWrapper: {
		flexDirection: "row",
		alignItems: "center",
		padding: 12,
		borderWidth: 2,
		borderColor: "#CBD5E1",
		borderRadius: 8,
		marginBottom: 12,
	},
	input: {
		flex: 1,
		marginLeft: 8,
	},
	createButton: {
		padding: 12,
		backgroundColor: "#F97316",
		borderRadius: 8,
		alignItems: "center",
		marginBottom: 12,
	},
	buttonText: {
		fontSize: 18,
		color: "white",
	},
	footerText: {
		textAlign: "center",
	},
	linkText: {
		fontWeight: "bold",
		color: "#2563EB",
	},
})
