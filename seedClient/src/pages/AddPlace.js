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
		const rating = this.state.place.rating;
		const imgUri = this.state.place.imgUri;
                
                
		auth.addPlace(city, zip, street, gpsLocation, rating, imgUri, (err, loggedIn) => {
		  if (err) {
			return this.setState({ err: err.errorMessage });
		  }
		  this.setState({ err: "" });
		  this.props.history.push("/");
		});
		window.location.href = "/#/addplace";
	  }
          
//          render() {
//		return (
//		<div className="container">
        <form className="form-signin" onSubmit={//this.handleSubmit}>
          <h2 className="form-signin-heading">Please register</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="text" value={//this.state.user.username} onChange={this.onChange} className="form-control" id="username" placeholder="User Name" required autoFocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" value={//this.state.user.password} onChange={this.onChange} id="password" className="form-control" placeholder="Password" required />
		  <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
          <br />
        </form>
      </div>//
//	)
//  }

}

export default AddPlace	;