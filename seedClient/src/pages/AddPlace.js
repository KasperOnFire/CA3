<<<<<<< HEAD
import React, { Component } from 'react'

import auth from "../authorization/auth";

class AddPlace extends Component {
  constructor() {
    super();
    this.state = { err: "", user: {username:"",password:""} }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const description = this.state.user.description;
    const address = this.state.user.address;
    auth.login(user, pass, (err, loggedIn) => {
      if (err) {
        return this.setState({ err: err.errorMessage });
      }
      this.setState({ err: "" });
      this.props.history.push("/");
    });
  }

  onChange = (e) => {
    const propertyName = e.target.id;
    const value = e.target.value;
    let user = this.state.user;
    user[propertyName] = value;
    this.setState({user});
  }

  render() {
    return (
      <div className="container">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <label htmlFor="description" className="sr-only">Description</label>
          <input type="text" value={this.state.user.description} onChange={this.onChange} className="form-control" id="description" required autoFocus />
          <label htmlFor="address" className="sr-only">Address</label>
          <input type="text" value={this.state.user.address} onChange={this.onChange} className="form-control" id="address" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
          <br />
        </form>
        { this.state.err && ( 
          <div className="alert alert-danger errmsg"  role="alert"> 
            {this.state.err}
          </div>
        )}
      </div>
    )
  }
}

export default Login;
=======
import React, { Component } from "react";
import auth from "../authorization/auth";

class AddPlace extends Component{

	constructor() {
		super();
		this.state = { err: "", place: {city:"",zip:"", street:"", gpsLocation:"", description:"", rating:"", imgUri:""}}
	  }

          handleSubmit = (event) => {
		event.preventDefault()
		const city = this.state.place.city;
		const zip = this.state.place.zip;
		const street = this.state.place.street;
		const gpsLocation = this.state.place.gpsLocation;
		const zip = this.state.place.zip;
		const zip = this.state.place.zip;
                
                
		auth.register(user, pass, (err, loggedIn) => {
		  if (err) {
			return this.setState({ err: err.errorMessage });
		  }
		  this.setState({ err: "" });
		  this.props.history.push("/");
		});
		window.location.href = "/#/login";
	  }
}
>>>>>>> b5594bf1f6722ee9d2cf0ab30788bef790e5415e
