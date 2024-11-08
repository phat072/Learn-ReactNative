import axios from 'axios';

export const useDeleteNote = (id?: string) => {
  const handleDeleteNote = async (id: string) => {
    try {
      const response = await axios.delete(`http://10.0.2.2:8000/notes/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        console.error('Error deleting note:', response.statusText);
        return;
      }

      console.log('Note deleted successfully');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to delete note:', error.message);
      } else {
        console.error('Failed to delete note:', error);
      }
    }
  };

  return { handleDeleteNote };
};
