// Screen.tsx
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AppContext } from "../context/AppContext";
import { RootNativeStackParamList } from "./types";
import { LogInScreen } from "./LogInScreen";
import { SignUpScreen } from "./SignUpScreen";
import { HomeScreen } from "./HomeScreen";
import  { HomeDetailScreen } from "./HomeDetailScreen";
import { NotificationDetailScreen } from "./NotificationDetailScreen";

const Stack = createNativeStackNavigator<RootNativeStackParamList>();

const Screen = () => {
    const appContext = useContext(AppContext);

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="LogIn">
				{appContext?.isLoggedIn === "success" ? (
					<>
						<Stack.Screen name="HomeScreen" component={HomeScreen} />
						<Stack.Screen
							options={{ headerShown: true }}
							name="HomeDetailScreen"
							component={HomeDetailScreen}
						/>
						<Stack.Screen
							options={{ headerShown: true }}
							name="NotificationDetailScreen"
							component={NotificationDetailScreen}
						/>
					</>
				) : (
					<>
						<Stack.Screen name="LogIn" component={LogInScreen} />
						<Stack.Screen name="SignUp" component={SignUpScreen} />
					</>
				)}
			</Stack.Navigator>
        </NavigationContainer>
    );
};

export default Screen;
