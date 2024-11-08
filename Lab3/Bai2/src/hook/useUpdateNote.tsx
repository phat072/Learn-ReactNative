import { useState } from "react";
import { Alert } from "react-native";

export const useUpdateNote = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const alert = () =>
    Alert.alert("Warning", "Please enter a title and note", [
      { text: "Oke", style: "default" },
    ]);

  const handleUpdateNote = async (id: string, noteState: { title: string; note: string; }) => {
    if (!title || !note) {
      console.log("Validation failed");
      alert();
      return;
    }

    try {
      const response = await fetch(`http://10.0.2.2:8000/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, note }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error updating note:", errorData.message);
        return;
      }

      console.log("Note updated successfully");
      // Optionally reset state after successful update
      setTitle("");
      setNote("");
    } catch (error) {
      if (error instanceof Error) {
        console.error("Failed to update note:", error.message);
      } else {
        console.error("Failed to update note:", error);
      }
    }
  };

  return { title, setTitle, note, setNote, handleUpdateNote };
};