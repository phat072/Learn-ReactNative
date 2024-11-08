import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from "react-native"
import { HomeNativeStackParamList } from "../../type"
import { MainHomeScreen } from "./components/MainHomScreenComponent"
import { NoteAppHomeScreen } from "./components/NoteAppHomeScreenComponent"
import { useTheme } from "../../../hook/useTheme"  // Importing the custom hook

const HomeNativeStack = createNativeStackNavigator<HomeNativeStackParamList>()

export const HomeScreen = () => {
  const { themeState } = useTheme()  // Using the theme context to manage theme

  return (
    <HomeNativeStack.Navigator
      screenOptions={({ route, navigation }) => ({
        animationDuration: 100,
        animation: "fade_from_bottom",
        header: () => {
          if (route.name === "Main") {
            return (
              <SafeAreaView style={styles.headerContainer}>
                <View
                  style={[
                    styles.headerView,
                    themeState.theme === "Dark" && styles.darkBackground,
                  ]}
                >
                  <Text
                    style={[
                      styles.headerText,
                      themeState.theme === "Dark" ? styles.darkText : styles.lightText,
                    ]}
                  >
                    Note App
                  </Text>
                </View>
              </SafeAreaView>
            )
          }
          if (route.name === "NoteApp") {
            return (
              <SafeAreaView>
                <View
                  style={[
                    styles.headerViewRow,
                    themeState.theme === "Dark" && styles.darkHeader,
                  ]}
                >
                  <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate("Main")}
                  >
                    <Text
                      style={themeState.theme === "Dark" ? styles.darkText : styles.lightText}
                    >
                      Go back
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.headerText,
                      themeState.theme === "Dark" ? styles.darkText : styles.lightText,
                    ]}
                  >
                    {route.params?.id ? "Edit Note" : "Add Note"}
                  </Text>
                </View>
              </SafeAreaView>
            )
          }
        },
      })}
    >
      <HomeNativeStack.Screen name="Main" component={MainHomeScreen} />
      <HomeNativeStack.Screen name="NoteApp" component={NoteAppHomeScreen} />
    </HomeNativeStack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 64,
    borderBottomWidth: 1,
    borderColor: "#gray",
  },
  headerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  darkBackground: {
    backgroundColor: "#1a1a1a",
  },
  darkText: {
    color: "#4db8ff",
  },
  lightText: {
    color: "#ff6600",
  },
  headerViewRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 64,
    borderBottomWidth: 1,
    borderColor: "#gray",
  },
  backButton: {
    width: "33%",
  },
  darkHeader: {
    backgroundColor: "#333333",
  },
})
