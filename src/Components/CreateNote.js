import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNoteSuccess } from '../actions/noteActions'


const API = "http://localhost:3000/api/v1/notes"

class CreateNote extends Component {
    constructor(){
        super();
        this.state = {
            title: "",
            content: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        

        fetch(API, payload)
        .then(resp => resp.json())
        .then(note => {
            console.log(note)
            this.props.createNoteSuccess(note)
        })
        .catch(err => console.log(err))

        this.setState({
            title: "",
            content: ""
        })
    }


    


    render(){
        return(
            <div onSubmit={this.handleSubmit} className="m-auto w-2/4 p-10">
                <form className="lg:m-auto w-2/4 p-6">
                    <label className="font-mono" htmlFor="title">Title:</label><br/>
                    <input type="text" name="title" id="title" onChange={this.handleChange} value={this.state.title}/><br/>
                    <label className="font-mono" htmlFor="content">Content:</label><br/>
                    <textarea rows={2} columns={50}type="text" name="content" id="content" onChange={this.handleChange} value={this.state.content} /><br/>
                    <input className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer" type="submit" value="Post Note"/>
                </form>
            </div>
        )
    }
}

const MapDispatchToProps =  {
    createNoteSuccess
}

export default connect(null, MapDispatchToProps)(CreateNote);