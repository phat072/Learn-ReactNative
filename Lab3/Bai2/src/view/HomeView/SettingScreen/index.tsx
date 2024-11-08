import React from "react";
import { SafeAreaView, Switch, Text, View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { useTheme } from "../../../hook/useTheme"; // Import the hook

export const SettingView = () => {
  const { themeState, toggleTheme, setFontSize } = useTheme(); // Destructure the values from the context

  return (
    <SafeAreaView style={themeState.theme === "Dark" ? styles.darkContainer : styles.lightContainer}>
      <View style={styles.header}>
        <Text style={[styles.headerText, themeState.theme === "Dark" && styles.darkText]}>
          Settings
        </Text>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={[styles.text, { fontSize: themeState.fontSize }, themeState.theme === "Dark" && styles.darkText]}>
            Dark Mode
          </Text>
          <Switch
            onValueChange={toggleTheme}  // Use the toggle function from context
            value={themeState.theme === "Dark"}
          />
        </View>
        <View style={styles.sliderContainer}>
          <View style={styles.row}>
            <Text style={[styles.text, { fontSize: themeState.fontSize }, themeState.theme === "Dark" && styles.darkText]}>
              Font Size
            </Text>
            <Text style={[styles.text, { fontSize: themeState.fontSize }, themeState.theme === "Dark" && styles.darkText]}>
              {themeState.fontSize}
            </Text>
          </View>
          <Slider
            style={styles.slider}
            value={themeState.fontSize}
            onValueChange={(fontSize) =>
              setFontSize(Math.round(fontSize))  // Use the setFontSize function from context
            }
            minimumValue={8}
            maximumValue={32}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    paddingLeft: 16,
    justifyContent: "center",
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
  darkText: {
    color: "#FFFFFF",
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    paddingVertical: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  text: {
    color: "#000000",
  },
  sliderContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  slider: {
    width: 240,
    marginTop: 8,
  },
});
