import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useTheme } from "../../hook/useTheme"; // Import the hook
import { HomeScreen } from "./HomeScreen";
import { SettingView } from "./SettingScreen";
import { StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  focusedBorder: {
    borderTopWidth: 1,
    borderTopColor: "black",
  },
});

export const HomeView = () => {
  const { themeState } = useTheme(); // Destructure the values from the context

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: themeState.theme === "Dark" ? "black" : "white",
        tabBarInactiveBackgroundColor: themeState.theme === "Dark" ? "black" : "white",
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          const containerStyle = [
            styles.tabIconContainer,
            focused && styles.focusedBorder,
          ];
          if (route.name === "Home")
            return (
              <View style={containerStyle}>
                <Feather
                  name="home"
                  size={24}
                  color={focused ? "blue" : "#ccc"}
                />
              </View>
            );
          if (route.name === "Settings")
            return (
              <View style={containerStyle}>
                <AntDesign
                  name="setting"
                  size={24}
                  color={focused ? "blue" : "#ccc"}
                />
              </View>
            );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingView} />
    </Tab.Navigator>
  );
};
