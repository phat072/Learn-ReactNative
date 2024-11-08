import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { HomeNativeStackParamList } from "../../../type";
import { ListItemNoteScreenComponent } from "./ListItemNoteScreenComponent";
import { useTheme } from "@/src/hook/useTheme"; // Updated import

export const MainHomeScreen = () => {
  const navigation = useNavigation<NavigationProp<HomeNativeStackParamList>>();

  const handleNavigateToNoteApp = (id: string | null) => {
    navigation.navigate("NoteApp", { id });
  };

  const { themeState } = useTheme(); // Access themeState from the useTheme hook

  return (
    <View
      style={[
        styles.container,
        themeState.theme === "Dark" && styles.darkBackground, // Updated to use themeState
      ]}
    >
      <View style={styles.header}>
        <Text
          style={[
            styles.headerText,
            { fontSize: themeState.fontSize }, // Updated to use themeState
            themeState.theme === "Dark" && styles.darkText, // Updated to use themeState
          ]}
        >
          All Notes
        </Text>
        <TouchableOpacity onPress={() => handleNavigateToNoteApp(null)}>
          <View>
            <AntDesign
              name="pluscircle"
              color={themeState.theme === "Dark" ? "blue" : "orange"} // Updated to use themeState
              size={42}
            />
          </View>
        </TouchableOpacity>
      </View>
      <ListItemNoteScreenComponent />
    </View>
  );
};

// Define styles with StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingVertical: 8,
  },
  darkBackground: {
    backgroundColor: "#1A1A1A",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20, // Default fontSize if not overridden
  },
  darkText: {
    color: "white",
  },
});
