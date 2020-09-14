import React, { Component } from 'react'
import NoteCard from '../components/NoteCard.js'


class NotesContainer extends Component {
   


    render(){
        return(
            <div className="m-auto w-2/4 p-10">
                {this.props.notes.map(note => {
                    return <NoteCard key={note.id} {...note}/>
                })}
            </div>
        )
    }

}

export default NotesContainer;