import { useCreateNote } from "./useCreateNote"
import { useGetListNote } from "./useGetNote"
import { useUpdateNote } from "./useUpdateNote"
import { useDeleteNote } from "./useDeleteNote"
import { useTheme } from "./useTheme"
const NoteAction = {
	useCreateNote,
	useGetListNote,
	useUpdateNote,
	useDeleteNote,
    useTheme,
}
export default NoteAction