import React from 'react'
import EditNoteButton from '../components/EditNoteButton'
import DeleteNoteButton from '../components/DeleteNoteButton'

const NoteCardButtonContainer = (props) => {

    return (
        <div className="inline-flex">
              <EditNoteButton/>  
              <DeleteNoteButton id={props.id}/>
        </div>
    )

}


export default NoteCardButtonContainer;