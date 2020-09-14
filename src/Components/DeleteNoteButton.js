import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteNote } from '../actions/noteActions'

const API = "http://localhost:3000/api/v1/notes/"

class DeleteNoteButton extends Component {

    handleDelete = (id) => {
        fetch(API + id, {method: "DELETE"} )
        .then(resp => resp.json())
        .then(note => {
            this.props.deleteNote(note.id)
        })
    }

    render(){
        return(
            <button onClick={() => this.handleDelete(this.props.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
             Delete
            </button>
        )
    }

}



const MapDispatchToProps = {
   deleteNote
}


export default connect(null, MapDispatchToProps)(DeleteNoteButton);