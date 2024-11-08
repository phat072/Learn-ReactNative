import { useState } from "react";
import axios from "axios";

export const useGetListNote = () => {
  const [listNote, setListNote] = useState<{ state: string; contents: any[] }>({
    state: "loading",
    contents: [],
  });

  const handleGetListNote = async () => {
    try {
      const response = await axios.get("http://10.0.2.2:8000/notes"); 

      if (response.status !== 200) {
        throw new Error("Failed to fetch notes");
      }

      const data = response.data;
      setListNote({
        state: "hasValue",
        contents: data,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching notes:", error.message);
      } else {
        console.error("Error fetching notes:", error);
      }
      setListNote({
        state: "error",
        contents: [],
      });
    }
  };

  return { listNote, handleGetListNote };
};
