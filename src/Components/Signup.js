import React, { Component } from 'react'

const API = "http://localhost:3000/api/v1/users"


class Signup extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            errorMessage: ""
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
            method: 'POST',
            header: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch(API, payload)
        .then(resp => resp.json())
        .then(userData => {
            if (userData.status === "USER NOT CREATED") {
                this.setState({
                    errorMessage: userData.error.join()
                })
            } else {
                this.props.showUser(userData)
            }
        })
        .catch(err => console.log(err))

        this.setState({
            username: ""
        })
    }


    render(){
        return ( 

            <div className="m-auto w-2/4 p-10"  >
                
            <form className="m-auto max-w-sm" onSubmit={this.handleSubmit}>
                <div className="flex items-center border-b border-teal-500 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="username" onChange={this.handleChange} type="text" value={this.state.username} placeholder="Jane Doe"/>
                <input className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" value="Sign Up"/>
                </div>
        {this.state.errorMessage === "" ? null : <p className="error">{this.state.errorMessage}</p>}
             </form>
           </div>
        )
    }
}

export default Signup;