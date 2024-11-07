import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeTabParamsList } from "../types"
import { Home } from "./Home"
import { Categories } from "../HomeScreen/CatagoryScreen/index"
import { Profile } from "./Profile"
import { Favorites } from "./Favorites"
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons"
import { Text, View, StyleSheet } from "react-native"

const Tab = createBottomTabNavigator<HomeTabParamsList>()

const styles = StyleSheet.create({
	focusedText: {
		color: 'blue',
	},
	unfocusedText: {
		color: 'gray',
	},
	iconContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
})

export const HomeScreen = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeTab"
			screenOptions={({ route }) => ({
				tabBarLabel: ({ focused }) => {
					const textStyle = focused ? styles.focusedText : styles.unfocusedText
					if (route.name === "HomeTab")
						return <Text style={textStyle}>Home</Text>
					if (route.name === "Categories")
						return <Text style={textStyle}>Categories</Text>
					if (route.name === "Favorites")
						return <Text style={textStyle}>Favorites</Text>
					if (route.name === "Profile")
						return <Text style={textStyle}>Profile</Text>
				},
				tabBarIcon: ({ focused }) => {
					const iconColor = focused ? "blue" : "black"
					if (route.name === "HomeTab")
						return (
							<View style={styles.iconContainer}>
								<AntDesign name="home" size={24} color={iconColor} />
							</View>
						)
					if (route.name === "Categories")
						return (
							<View>
								<AntDesign name="appstore1" size={24} color={iconColor} />
							</View>
						)
					if (route.name === "Favorites")
						return (
							<View>
								<Octicons name="heart-fill" size={24} color={iconColor} />
							</View>
						)
					if (route.name === "Profile")
						return (
							<View>
								<FontAwesome name="user" size={24} color={iconColor} />
							</View>
						)
				},
			})}>
			<Tab.Screen
				options={{ headerShown: false }}
				name="HomeTab"
				component={Home}
			/>
			<Tab.Screen name="Categories" component={Categories} />
			<Tab.Screen name="Favorites" component={Favorites} options={{ tabBarBadge: 3 }}/>
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	)
}
