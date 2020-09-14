export const fetchNotesSuccess = (notes) => {
    return {
      type: "FETCH_NOTES_SUCCESS",
       notes: notes
    }
  };

export const createNoteSuccess = (newNote) => {
    return {
      type: "CREATE_NOTE_SUCCESS",
       newNote: newNote
    }
  };

export const deleteNote = (id) => {
  return {
    type: "DELETE_NOTE",
    id: id
  }
}


