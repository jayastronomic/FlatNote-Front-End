export default function notes(state = [], action){
    switch(action.type) {
        case "FETCH_NOTES_SUCCESS":
            return [...action.notes]
        case "DELETE_NOTE":
            return state.filter(n => n.id !== action.id )
        case "CRETE_NOTE_SUCCESS":
            const newNote = action.newNote 
            return [...state, ...newNote]
        default:
            return state
    }
}