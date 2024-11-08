import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { RouteProp, useRoute } from "@react-navigation/native";
import { HomeNativeStackParamList } from "../../../type";
import NoteAction from "@/src/hook"; // Assuming the actions (create, update, get) are inside this hook
import { useTheme } from "@/src/hook/useTheme"; // Updated import for useTheme

export const NoteAppHomeScreen = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<HomeNativeStackParamList, "NoteApp">>();

  const { themeState } = useTheme(); // Accessing the theme from the context
  const { handleCreateNote } = NoteAction.useCreateNote();
  const { handleGetListNote } = NoteAction.useGetListNote();
  const { handleUpdateNote } = NoteAction.useUpdateNote();

  const fontSize = themeState.fontSize || 16;

  // State management for creating and updating notes
  const [createNoteState, setCreateNoteState] = useState({
    state: "idle",
    contents: {
      title: "",
      note: "",
    },
  });

  const [updateNoteState, setUpdateNoteState] = useState({
    state: "idle",
    content: {
      title: "",
      note: "",
    },
  });

  // useEffect(() => {
  //   if (id) {
  //     // If an ID exists, fetch the note details for updating
  //     const fetchNoteDetails = async () => {
  //       const fetchedNote = await NoteAction.handleGetNoteById(id);
  //       if (fetchedNote) {
  //         setUpdateNoteState({
  //           state: "idle",
  //           content: fetchedNote,
  //         });
  //       }
  //     };

  //     fetchNoteDetails();
  //   }
  // }, [id]);

  return (
    <View
      style={[
        styles.container,
        themeState.theme === "Dark" && styles.darkBackground,
      ]}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.textInput,
            { fontSize },
            themeState.theme === "Dark" && styles.darkText,
          ]}
          placeholderTextColor={themeState.theme === "Dark" ? "white" : "gray"}
          placeholder="Enter your title"
          value={
            id ? updateNoteState.content.title : createNoteState.contents.title
          }
          onChangeText={(text) => {
            if (!id) {
              setCreateNoteState((prevState) => ({
                ...prevState,
                contents: {
                  ...prevState.contents,
                  title: text,
                },
              }));
            } else {
              setUpdateNoteState((prevState) => ({
                ...prevState,
                content: {
                  ...prevState.content,
                  title: text,
                },
              }));
            }
          }}
        />
      </View>

      <View style={styles.textAreaContainer}>
        <TextInput
          multiline={true}
          style={[
            styles.textInput,
            { fontSize },
            themeState.theme === "Dark" && styles.darkText,
          ]}
          placeholderTextColor={themeState.theme === "Dark" ? "white" : "gray"}
          placeholder="Enter your note"
          value={
            id ? updateNoteState.content.note : createNoteState.contents.note
          }
          onChangeText={(text) => {
            if (!id) {
              setCreateNoteState((prevState) => ({
                ...prevState,
                contents: {
                  ...prevState.contents,
                  note: text,
                },
              }));
            } else {
              setUpdateNoteState((prevState) => ({
                ...prevState,
                content: {
                  ...prevState.content,
                  note: text,
                },
              }));
            }
          }}
        />
      </View>

      <View style={styles.buttonRow}>
        <Octicons name="x-circle-fill" size={44} color="red" />
        <TouchableOpacity
          onPress={() => {
            if (!id) {
              handleCreateNote(createNoteState.contents); // Pass the note data when creating a note
              handleGetListNote(); // Refresh list after creation
            } else {
              handleUpdateNote(id, updateNoteState.content); // Pass the updated note data
              handleGetListNote(); // Refresh list after update
            }
          }}
        >
          <AntDesign name="checkcircle" size={44} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
    justifyContent: "space-between",
  },
  darkBackground: {
    backgroundColor: "#1A1A1A",
  },
  inputContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  textAreaContainer: {
    height: 128,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
  },
  textInput: {
    color: "black",
  },
  darkText: {
    color: "white",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
