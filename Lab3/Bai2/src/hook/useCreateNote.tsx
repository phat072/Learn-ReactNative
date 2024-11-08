import { v4 as uuid } from "uuid";
import { Alert } from "react-native";
import axios from "axios";  // Use axios for API calls
import { useState } from "react";

export const useCreateNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const reset = () => {
    setTitle("");
    setNote("");
  };

  const alert = () =>
    Alert.alert("Warning", "Please enter a title", [
      { text: "OK", style: "default" },
    ]);

  const handleCreateNote = async (noteState: { title: string; note: string; }) => {
    if (!title || !note) {
      alert();
      return;
    }

    try {
      const response = await axios.post(
        "http://10.0.2.2:8000/notes", 
        {
          title,
          note
        }, 
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      console.log("Note created successfully:", response.data);
      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Failed to create note:", error.message);
      } else {
        console.error("Failed to create note:", error);
      }
    }
  };

  return { handleCreateNote };
};
