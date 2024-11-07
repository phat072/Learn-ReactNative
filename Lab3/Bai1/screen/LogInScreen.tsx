import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native"
import { AppContext } from "../context/AppContext"

export const LogInScreen = () => {
	const navigation = useNavigation()
	const appContext = React.useContext(AppContext)
	const [email, setEmail] = React.useState<string>("")
	const [password, setPassword] = React.useState<string>("")
	const AlertContent = () =>
		Alert.alert("Incorrect email or password", "", [
			{
				onPress: () => {
					appContext?.setIsLoggedIn("hasError")
				},
			},
		])
	const handleSubmit = () => {
		if (appContext?.data) {
			if (
				!appContext.data.some(
					(e) => e.email === email && e.password === password
				)
			) {
				AlertContent()
				console.log("hasError")
			} else {
				appContext.setIsLoggedIn("success")
				console.log("success")
			}
		}
	}
	return (
		<SafeAreaView>
			<View style={{ justifyContent: 'center', width: '100%', height: '100%', paddingHorizontal: 32, paddingVertical: 16, alignItems : 'center'}}>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 80, height: 80, backgroundColor: 'black', borderRadius: 40 }}>
					<FontAwesome5 name="react" size={52} color="#61dbfb" />
				</View>
				<View>
					<Text style={{ fontSize: 24, fontWeight: 'bold' , textAlign: 'center', marginBottom : 10}}>Welcome</Text>
				</View>
				<View style={{ width: '100%', marginBottom: 16 }}>
					<View style={{ flexDirection: 'row', padding: 12, marginRight: 12, borderWidth: 2, borderRadius: 8, borderColor: 'slategray' , marginBottom : 20 ,}}>
						<Feather name="mail" size={24} />
						<TextInput
							onChangeText={(text) => setEmail(text)}
							style={{ flexGrow: 1 }}
							placeholder="Enter email"
						/>
					</View>
					<View style={{ flexDirection: 'row', padding: 12, marginRight: 12, borderWidth: 2, borderRadius: 8, borderColor: 'slategray' }}>
						<AntDesign name="lock1" size={24} />
						<TextInput
							onChangeText={(text) => setPassword(text)}
							style={{ flexGrow: 1 }}
							placeholder="Enter password"
							secureTextEntry={true}
						/>
					</View>
					<View style={{ alignItems: 'flex-end', width: '100%' }}>
						<Text style={{ color: 'hotpink', fontWeight: 'bold', marginBottom: 20,}}>Forgot password</Text>
					</View>
					<TouchableOpacity
						style={{ padding: 12, backgroundColor: 'orange', borderWidth: 2, borderRadius: 8, marginBottom: 20 }}
						onPress={handleSubmit}>
						<Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>LOG IN</Text>
					</TouchableOpacity>
					<View style={{ flexDirection: 'column', gap: 8 }}>
						<Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
							Or login with
						</Text>
						<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16 , marginBottom: 25}}>
							<FontAwesome5 name="facebook" color="blue" size={48} />
							<AntDesign name="google" color={"red"} size={48} />
						</View>
					</View>
					<View>
						<Text style={{ textAlign: 'center' }}>
							Don't have an account?{" "}
							<Text
								onPress={() => navigation.navigate("SignUp")}
								style={{ fontWeight: 'bold', color: 'blue' }}>
								Sign up here!
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}