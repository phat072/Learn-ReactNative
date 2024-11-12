import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { HomeNativeStackParamList } from "../../../type";
import NoteAction from "@/src/hook";
import { useTheme } from "@/src/hook/useTheme"; // Import the useTheme hook

type TItemNoteScreenComponentProps = {
  id: string;
  title: string;
  note: string;
  onRefresh: () => void; // Add prop to trigger refresh
};

export const ItemNoteScreenComponent: React.FC<TItemNoteScreenComponentProps> = ({
  title,
  note,
  id,
  onRefresh,
}) => {
  const navigation = useNavigation<NavigationProp<HomeNativeStackParamList, "NoteApp">>();
  const { themeState } = useTheme(); // Use theme from context
  const setUpdateNote = (noteData: { state: string; content: any }) => {};
  const { handleDeleteNote } = NoteAction.useDeleteNote();

  const handleSetUpdateNote = () => {
    setUpdateNote({
      state: "hasValue",
      content: { id, title, note },
    });
  };

  const handleDelete = async () => {
    try {
      await handleDeleteNote(id); // Xoá ghi chú
      onRefresh(); // Refresh list after deletion
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleSetUpdateNote();
        navigation.navigate("NoteApp", { id });
      }}
    >
      <View
        style={[
          styles.itemContainer,
          themeState.theme === "Dark" && styles.darkBorder,
        ]}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.title,
              { fontSize: themeState.fontSize },
              themeState.theme === "Dark" && styles.darkText,
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.note,
              { fontSize: themeState.fontSize },
              themeState.theme === "Dark" && styles.darkText,
            ]}
          >
            {note}
          </Text>
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <EvilIcons
            name="trash"
            size={42}
            color={themeState.theme === "Dark" ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export const ListItemNoteScreenComponent = () => {
  const { listNote, handleGetListNote } = NoteAction.useGetListNote();
  const { themeState } = useTheme(); // Use theme from context
  const [refreshKey, setRefreshKey] = useState(0); // Key to trigger re-render

  useEffect(() => {
    handleGetListNote(); // Fetch notes when the component mounts or refreshKey changes
  }, [refreshKey]);

  const { state, contents } = listNote;

  return (
    <ScrollView
      style={[
        styles.scrollView,
        { backgroundColor: themeState.theme === "Dark" ? "#1A1A1A" : "#FFFFFF" },
      ]}
    >
      {state === "hasValue" &&
        contents
          .filter((item: { id: React.Key | null | undefined }) => item.id !== null && item.id !== undefined)
          .map((item: { id: React.Key; title: string; note: string }) => (
            <ItemNoteScreenComponent
              key={item.id}
              id={item.id.toString()}
              title={item.title}
              note={item.note}
              onRefresh={() => setRefreshKey((prev) => prev + 1)} // Increment key to force re-render
            />
          ))}
      {state === "loading" && (
        <Text style={{ color: themeState.theme === "Dark" ? "white" : "black" }}>
          Loading...
        </Text>
      )}
      {state === "error" && (
        <Text style={{ color: themeState.theme === "Dark" ? "white" : "black" }}>
          Error loading notes
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  darkBorder: {
    borderBottomColor: "#444",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
  note: {
    color: "#555",
  },
  darkText: {
    color: "#fff",
  },
});
