import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './Navbar.js'
import CreateNote from './CreateNote.js'
import NotesContainer from '../containers/NotesContainer.js';
import Login from './Login.js';
import Signup from './Signup.js'

import { connect } from 'react-redux'
import { fetchNotesSuccess } from '../actions/noteActions'

const API = "http://localhost:3000/api/v1/notes"


 class App extends Component {
   constructor(){
    super();
    this.state = {
      notes: []
   }
  }

   componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(notes => {
        this.props.fetchNotesSuccess(notes.data)
    })
}

  // addNote = (note) => {
  //   this.setState({
  //     notes: [...this.state.notes, note]
  //   })
  // }



   render() {
     console.log(this.props)
  return (
    <Router>
      <div>
        <Navbar/> 
        <Route exact path="/new/note" render={() => <CreateNote  addNote={this.addNote}/>} />
        <Route exact path="/notes" render={() => <NotesContainer  notes={this.props.notes} />}  />
        <Route exact path="/login" render={() => <Login /> }/>
        <Route exact path="/signup" render={() => <Signup /> }/>
      </div>
    </Router>
  )
  }
}





// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchNotesSuccess: (notes) => {
//       dispatch(fetchNotesSuccess(notes))
//     }
//   }
// }

const mapDispatchToProps = {
  fetchNotesSuccess
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
