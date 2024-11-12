import { Alert } from "react-native";
import axios from "axios";

export const useCreateNote = () => {
  const handleCreateNote = async (noteState: { title: string; note: string }) => {
    const { title, note } = noteState;

    if (!title || !note) {
      Alert.alert("Warning", "Please enter a title");
      return;
    }

    try {
      const response = await axios.post(
        "http://10.0.2.2:8000/notes",
        { title, note },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log("Note created successfully:", response.data);
    } catch (error) {
      console.error("Failed to create note:", error);
    }
  };

  return { handleCreateNote };
};
